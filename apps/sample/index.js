var ipc = require("electron").ipcMain; 

module.exports = function(config) {
  var self = this;

  //show the loading animation for my application in the app container
  self.loading(true);

  //hide the loading animation
  self.loading(false);

  self.log.info('info message, my index.js file was loaded!');
  self.log.error('logged a sample error');

  //receives a event from frontend
  ipc.on('sample_frontend_message', function(event, message) {
    self.log.info(message);
  });

  //load app specific data, you can also specify a default obj, that should be initially saved
  self.load(function(data) {
    self.log.info(data.defaultObj);

    data.iWasSaved = true;
    self.save(data, function(error) {
      self.log.error(error);
    });
  }, { defaultObj : 'im a sample app' });

  // self.getRequest('mysample.url', function(error, response, body) {
  //   self.log.error(error);
  //   self.log.info(response);
  //   self.log.info(body);
  // }, self.getUser().access_token);

  //valence bond events
  self.on.finishLoading = function() { 
    //sends a event to the frontend, when the frontend was loaded
    self.sendToWindow('hello_frontend', 'Message from your index.js file :)');
    self.log.info('the window was successfully loaded');
  };
  self.on.resize = function(width, height) { 
    self.log.info('window was resized to [' + width + '|' + height + ']');
  };
  self.on.move  = function(x, y) { 
    self.log.info('window was moved to [' + x + '|' + y + ']');
  };
  self.on.activate  = function() {
    self.log.info('window was activated');
  };
  self.on.deactivate = function() {
    self.log.info('window was deactivated');
  };
  self.on.show = function() { 
    self.log.info('window was shown');
  };
  self.on.hide = function() { 
    self.log.info('window was hided');
  };
  self.on.login = function(err, user) { 
    self.log.info('user was logged in');
  };
  self.on.logout = function() { 
    self.log.info('user was logged out');
  };
  self.on.close = function() {
    self.log.info('application will shut down');
  };
};

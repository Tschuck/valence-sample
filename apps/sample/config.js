module.exports = {
  id      : 'sample',             //valence-bond app id
  name    : 'Sample Application', //display name of application (if needed)
  icon    : '/img/sample.png',    //icon of the application
  devMode : false,                //true opens chrome developer tools in a new window
  order   : 1,                    //order for the apps in the app container
  /*auth    : {
    authorizeUrl    : 'https://sampleAuth.com/oauth2/authorize',
    authenticateUrl : 'https://sampleAuth.com/oauth2/access_token', 
    client_id       : 'my-client-id',
    client_secret   : 'my-client-secret',
    scopes          : [ ] // Scopes limit access for OAuth tokens.
  },*/

  //electron window configuration (new BrowserWindow)
  window : { 
    type            : 'splash',
    "always-on-top" : true,
    "skip-taskbar"  : true,
    
    //position of the window
    //can be on of the following possibilities
    //x : "100px"
    //x : "10%"
    //x : "100% - 300px" //be sure, that each location and arithmetic operator is seperated with a space (only + and - supported)
    x               : "25%",
    y               : "25%", 

    // valence-bond will auto size your application with the body size (if the frontend library is used)
    width           : 0,
    height          : 0,      

    "overlay-scrollbars" : false,
    "always-on-top"      : true, 
    resizable            : false,

    transparent     : true,
    frame           : false
  }
};
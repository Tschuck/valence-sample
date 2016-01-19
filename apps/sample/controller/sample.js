define([
  'css!./sample.css'
], function() {
  return function(ngApp) {
    ngApp.controller('sample', function($scope) {
      var ipc  = nodeRequire("ipc");

      $scope.message = '';

      ipc.on('hello_frontend', function(message) {
        $scope.message = message;
        ipc.send('sample_frontend_message', message);
        $scope.$apply();
      });
    });
  }
});

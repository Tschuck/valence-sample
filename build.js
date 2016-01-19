var valence   = require('valence-bond');
var buildPath = __dirname + '/../valence-bond-build';

//start the build process
//  specify the electron version
//              platform (linux, win32, darwin, all)
//              source directory (be sure that the source folder is not located in your application path, the package size will be increased recursively)
//              output directory 
//              callback function
valence.build('0.36.3', 'win32', __dirname, buildPath, function(error, path) {
  console.log('Finished valence sample app building!');
});
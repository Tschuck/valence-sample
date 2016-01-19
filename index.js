//require the valence start script, be sure to specifiy the path with the _dirname, 
//without this, the application will not run when it was build 
var valence = require(__dirname + '/node_modules/valence-bond/index.js');
 
//start the application
//add an array of directories, were valence-bond should look for application folders
//add an array of appnames, that should be loaded (names of the directories)
valence.run([ __dirname + '/apps' ], [ 'sample' ]);

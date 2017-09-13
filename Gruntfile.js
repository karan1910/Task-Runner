//The wrapper function
//Every Gruntfile (and gruntplugin) uses this basic format, 
//and all of your Grunt code must be specified inside this function:
module.exports = function(grunt){

    //Project and task configuration
    //Most Grunt tasks rely on configuration data defined in an object passed to the grunt.initConfig method.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //imports the JSON metadata stored in package.json into the grunt config
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            //<% %> template strings may reference any config properties
          },
          build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
          }
        }
      });
    
      //Loading Grunt plugins and tasks
      // Load the plugin that provides the "uglify" task.      
      grunt.loadNpmTasks('grunt-contrib-uglify');
    
      // Custom tasks
      // Default task(s).

      //grunt.task.registerTask(taskName, description, taskFunction)
      
      grunt.registerTask('default', ['uglify']);
};
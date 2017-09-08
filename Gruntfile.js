module.exports = function(grunt){
    grunt.initConfig({
        concat:{
            dist:{
                src: ['js/1.js', 'js/2.js'],
                dest: 'build/scripts.js',
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'watch', ]);
};
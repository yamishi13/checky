module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['checky.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', 'jshint');
};
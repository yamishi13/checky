module.exports = function(grunt) {
    grunt.initConfig({
        lint: {
            files: ['*.js']
        },
        min: {
            files: ['*.js']
        }
    });

    grunt.registerTask('travis', 'lint');
};
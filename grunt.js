//grunt.js
grunt.initConfig({
    qunit: {
        files: ['test/index.html']
    }
});

grunt.registerTask('test', 'qunit');
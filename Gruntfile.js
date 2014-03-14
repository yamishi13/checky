jasmine: {
    components: {
        src: [
        'components/*js'
        ],
        options: {
            specs: 'test/*.js',
            KeepRunner: true
        }
    }
}

grunt.registerTask('travis', ['jshint','jasmine']);
jasmine: {
    components: {
        src: [
        'components/*js'
        ],
        options: {
            specs: 'test/spec/*Spec.js',
            KeepRunner: true
        }
    }
}

grunt.registerTask('travis', ['jshint','jasmine']);
jasmine: {
    components: {
        src: [
        'components/*js'
        ],
        options: {
            specs: 'test/*Spec.js',
            KeepRunner: true
        }
    }
}

grunt.registerTask('travis', ['jshint','jasmine']);
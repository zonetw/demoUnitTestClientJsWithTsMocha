module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        ts: {
            default: {
                src: 'beforeBuild/*.ts',
                out: 'build/final.js'
            },
            buildForTest: {
                src: 'src/*.ts',
                out: 'buildForTest/final.js'
            },
            //@zone 個別的 ts compile 成 js 之後再給 mocha 做測試
            buildForUnitTest: {
                options:{
                   rootDir: 'src/'
                },
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    cwd: 'src/',        // Src matches are relative to this path.
                    src: ['**/*.ts'], // Actual pattern(s) to match.
                    dest: 'beforeUnitTest/',   // Destination path prefix.
                    ext: '.js',         // Dest filepaths will have this extension.
                }]
            }
        },
        strip_code: {
            options: {
                blocks: [{
                    start_block: "/*FK1*/",
                    end_block: "/*FK2*/"
                }]
            },
            your_target: {
                files: [{
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/',        // Src matches are relative to this path.
                        src: ['**/*.*'], // Actual pattern(s) to match.
                        dest: 'beforeBuild/',   // Destination path prefix.
                        //ext: '_stripped.ts',         // Dest filepaths will have this extension.
                    }]
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-strip-code');

    //@zone build for test
    grunt.registerTask('buildForTest', ['ts:buildForTest']);

    //@zone compile for unit test
    grunt.registerTask('buildForUnitTest', ['ts:buildForUnitTest']);

    //@zone build for production
    grunt.registerTask('buildForProduction', ['strip_code', 'ts']);
};

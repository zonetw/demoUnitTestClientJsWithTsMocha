module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        watch: {
            unitTest: {
               files: "src/**/*.ts",
               tasks: "ts:buildForUnitTest"
            }
        },
        ts: {
            default: {
                src: 'beforeBuild/*.ts',
                out: 'build/final.js'
            },
            buildForTest: {
                src: 'src/*.ts',
                out: 'buildForTest/final.js'
            },
            //@zone Run Unit test after single ts compiled to single js 
            buildForUnitTest0: {
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
            },
            buildForUnitTest: {
                src: 'src/**/*.ts',
                out: 'buildForUnitTest/final.js'
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
                // Make all ts file compiled to single js in the beforeBuild folder.
                files: [{
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/',        // Src matches are relative to this path.
                        src: ['**/*.ts'], // Actual pattern(s) to match.
                        dest: 'beforeBuild/',   // Destination path prefix.
                        //ext: '_stripped.ts',         // Dest filepaths will have this extension.
                    }]
            }
        },
        browserSync: {
            unitTest:{
                bsFiles: {
                    src : 'buildForUnitTest/*.*'
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "buildForUnitTest"
                    }
                }
            }
        }
    });

    //=========================
    // These plugins provide necessary tasks.
    //=========================
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //=========================
    // task
    //=========================
    //@zone Task for development
    grunt.registerTask('default', ['browserSync:unitTest', 'watch']);

    //@zone Code for testing won't be stripped
    grunt.registerTask('buildForTest', ['ts:buildForTest']);
    //@zone Striping code before publish
    grunt.registerTask('buildForProduction', ['strip_code', 'ts']);

};

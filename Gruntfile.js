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
            //@zone 個別的 ts compile 成 js 之後再給 mocha 做測試
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
                //這種格式只要符合條件就會被處理到, 建立鏡像的目錄結構到設定的資料夾
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
    //@zone 開發時使用
    grunt.registerTask('default', ['browserSync:unitTest', 'watch']);

    //@zone 測試用的 code 不會拿掉
    grunt.registerTask('buildForTest', ['ts:buildForTest']);
    //@zone 發佈前先移除測試用 code 再發佈
    grunt.registerTask('buildForProduction', ['strip_code', 'ts']);

};

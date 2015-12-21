var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    Config = require('./gulpconfig'),
    angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    minifyCss = require('gulp-minify-css'),
    runSequence = require('run-sequence'),
    gulpConfig = new Config();
    

/*********COMMON  [STARTS HERE]******* */
gulp.task('clean', function(){
    return del(['dist']);
});
gulp.task('watch', function(){
    var files = [
          gulpConfig.Header.tsSourceFiles,
          gulpConfig.Header.cssSourceFiles,
          gulpConfig.Menu.tsSourceFiles,
          gulpConfig.Menu.cssSourceFiles,
    ];
    gulp.watch(files, ['build-all']);
});


gulp.task('build-all',['clean'], function(cb){
    runSequence(['build-header', 'build-menu'],cb);
})

/*********COMMON  [ENDS HERE]******* */

/*********AVAM-HEADER [STARTS HERE]******* */
gulp.task('header-css', function(){
    return gulp.src(gulpConfig.Header.cssSourceFiles)
                        .pipe(concat(gulpConfig.Header.outputCSSFileName))        
                        .pipe(gulp.dest(gulpConfig.Common.outputPath));
});
gulp.task('header-ts', function(){
    var sourceFiles = [
        gulpConfig.Header.tsSourceFiles,
        gulpConfig.Common.libraryTypeScriptDefinitions
    ];
    return gulp.src(sourceFiles)
                        .pipe(ts({
                            noImplicitAny: true
                        }))
                        .pipe(gulp.dest(gulpConfig.Header.sourcePath));
});
gulp.task('header-tcache', function(){
    var sourcePath = gulpConfig.Header.sourcePath + "*.html";
    //del([gulpConfig.Header.sourcePath + 'template.js']);
    return gulp.src(sourcePath)
                 .pipe(templateCache({
                    root : gulpConfig.Header.templateCacheRoot,
                    module : 'avam-header'
                }))
                .pipe(gulp.dest(gulpConfig.Header.sourcePath));   
                
});


gulp.task('build-header',['header-tcache','header-ts','header-css'], function(){
    var src = gulpConfig.Header.sourcePath + '*.js';
    console.log(src);
    return gulp.src(src)
                       .pipe(angularFilesort())
                        //.pipe(uglify())
                        .pipe(concat(gulpConfig.Header.outputJSFileName))            
                        .pipe(gulp.dest(gulpConfig.Common.outputPath));      
});

/*********AVAM-HEADER [ENDS HERE]******* */

/*********AVAM-MENU [STARTS HERE]******* */
gulp.task('menu-css', function(){
    return gulp.src(gulpConfig.Menu.cssSourceFiles)
                        .pipe(concat(gulpConfig.Menu.outputCSSFileName))        
                        .pipe(gulp.dest(gulpConfig.Common.outputPath));
});

gulp.task('menu-ts', function(){
    var sourceFiles = [
        gulpConfig.Menu.tsSourceFiles,
        gulpConfig.Common.libraryTypeScriptDefinitions
    ];
    return gulp.src(sourceFiles)
                        .pipe(ts({
                            noImplicitAny: true
                        }))
                        .pipe(gulp.dest(gulpConfig.Menu.sourcePath));
});
gulp.task('menu-tcache', function(){
    var sourcePath = gulpConfig.Menu.sourcePath + "*.html";
    //del([gulpConfig.Header.sourcePath + 'template.js']);
    return gulp.src(sourcePath)
                 .pipe(templateCache({
                    root : gulpConfig.Menu.templateCacheRoot,
                    module : 'avam-menu'
                }))
                .pipe(gulp.dest(gulpConfig.Menu.sourcePath));   
                
});
gulp.task('build-menu',['menu-tcache','menu-ts','menu-css'], function(){
    var src = gulpConfig.Menu.sourcePath + '*.js';
    return gulp.src(src)
                       .pipe(angularFilesort())
                        //.pipe(uglify())
                        .pipe(concat(gulpConfig.Menu.outputJSFileName))            
                        .pipe(gulp.dest(gulpConfig.Common.outputPath));      
});
/*********AVAM-MENU [ENDS HERE]******* */
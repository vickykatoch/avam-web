var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    Config = require('./gulpconfig'),
    angularFilesort = require('gulp-angular-filesort'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    minifyCss = require('gulp-minify-css'),
    gulpConfig = new Config();
    




gulp.task('clean', function(cb){
    del(['dist'], cb);
});

gulp.task('build',['clean', 'compile:js'], function(){
    return gulp.src(gulpConfig.jsFilePath);
});

gulp.task('watch', function() {
    var files = [
          gulpConfig.tsAppSourceFiles,
          gulpConfig.tsHeaderSourceFile
          //gulpConfig.cssPath
    ];
    gulp.watch(files, ['build']);
});


gulp.task('compile:js',['compile:ts'], function () {
    //'compile:tcache'
    return gulp
            .src(gulpConfig.jsFilePath)
            .pipe(angularFilesort())
            //.pipe(uglify())
            .pipe(concat(gulpConfig.tsHeaderDistFile))            
            .pipe(gulp.dest(gulpConfig.outputPath));                
});

gulp.task('compile:ts', function(){
    var sourceFiles = [
        gulpConfig.tsHeaderSourceFile,
        gulpConfig.libraryTypeScriptDefinitions
    ];
    return gulp.src(sourceFiles)
        .pipe(ts({
            noImplicitAny: true
           }))
        .pipe(gulp.dest(gulpConfig.outputPath));
});

// gulp.task('header-compile:tcache', function(){
//     //console.log('Module : ' + gulpConfig.moduleName);
//     return gulp.src(gulpConfig.headerTemplatePath)
//             .pipe(templateCache({
//                 root : 'src/',
//                 module : gulpConfig.moduleName
//             }))
//             .pipe(gulp.dest(gulpConfig.outputPath));       
// });
'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
     
         /*********COMMON-VARS  [STARTS HERE]******* */
        this.Common = {
            outputPath : './dist/',
            libraryTypeScriptDefinitions: './typings/**/*.ts'
        };
         /*********COMMON-VARS [ENDS HERE]******* */
         
         
        /*********AVAM-HEADER [STARTS HERE]******* */
        this.Header = {
            sourcePath : './modules/avam-header/',
            tsSourceFiles :  './modules/avam-header/**/*.ts',
            cssSourceFiles : './modules/avam-header/*.css',
            outputJSFileName : 'avam-header.js',
            outputCSSFileName : 'avam-header.css',
            templateCacheRoot : 'modules/avam-header/'
        };
        /*********AVAM-HEADER [ENDS HERE]******* */
        
        
        /*********AVAM-MENU [STARTS HERE]******* */
        this.Menu = {
            sourcePath : './modules/avam-menu/',
            tsSourceFiles :  './modules/avam-menu/**/*.ts',
            cssSourceFiles : './modules/avam-menu/**/*.css',
            outputJSFileName : 'avam-menu.js',
            outputCSSFileName : 'avam-menu.css',
            templateCacheRoot : 'modules/avam-menu/'
        };
        /*********AVAM-MENU [ENDS HERE]******* */
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
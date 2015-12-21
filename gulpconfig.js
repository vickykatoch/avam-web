'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        
        this.tsAppSourceFiles = './app/**/*.ts';
        
        
        this.tsHeaderSourceFile = './modules/avam-header/**/*.ts';
        this.tsHeaderDistFile ='avam-header.js';
        this.headerTemplatePath = './modules/avam-header/**/*.html';
        
        this.outputPath = "./dist/";
         this.jsFilePath = "./dist/*.js"; //Doing nothing
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
        
        this.headerCssSourceFiles = './modules/avam-header/*.css';
        // this.typeScriptSourceFiles = './src/**/*.ts';
        // 
        // this.outputFile="avam-menu.js";
       
        // this.templatePath = "./src/*.html";
        // this.jsFilePath = "./dist/*.js";
        // this.moduleName = 'avam-menu';
        // this.cssPath = './src/avamMenu.css';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
"use strict";
//2-5
/**
 * typescript不能在命令行和浏览器运行
 * 冒号无法识别
 *  编译过的ts>js文件放再src文件，在tsconfig.json设置
 * "module":commonjs
 * "outDir":./2chapter/dist
 * "rootDir":./2chapter/src
 * 直接在工程目录下，命令 tsc 就可以编译
 * 按照commonjs规范编译
 */

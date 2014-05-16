/*
 * sass import compiler
 * 
 *
 * Copyright (c) 2014 Justin Worsdale
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {
	
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('sass_import_compiler', 'accepts an array of scss files and writes them to @imports for a main scss file', function () {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			//punctuation: '.',
			//separator: ', '
		});
		
		// Iterate over all specified file groups.
		this.files.forEach(function (fileobj) {
			
			var fileContents = '',
				dest = fileobj.dest,
				destpath = path.dirname(dest);
			
			fileobj.src.forEach(function(filename) {
				
				fileContents += '@import ' + path.relative(destpath, filename).replace(/\.scss/, '') + ';\n';
			});
			
			grunt.log.writeln(fileContents);
			
			grunt.file.write(fileobj.dest, fileContents);
		});
	});

};

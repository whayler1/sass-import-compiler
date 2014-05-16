'use strict';

var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.sass_import_compiler = {
	setUp: function (done) {
		// setup here if necessary
		done();
	},
	dist: function(test) {
		
		test.expect(2);
		
		var output = grunt.file.read('tmp/tmp.scss'),
			spl = output.split('\n'),
			match,
			matchHasPath = true,
			errorPath;
		
		test.ok(spl.length > 0, 'should be importing at least one file');
		
		//grunt.file.setBase('tmp');
		
		spl.forEach(function(filepath) {
			
			match = filepath.match(/ (.*);/);
			
			if(match instanceof Array && match.length > 1) {
				
				console.log(match);
			}else {
				
				matchHasPath = false;
				errorPath = filepath;
			}
		});
		
		test.ok(matchHasPath, 'paths should be properly formed: ' + errorPath);
		
		
		test.done();
	}
};

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
		
		var output = grunt.file.read('tmp/tmp.scss'),
			spl = output.split('\n'),
			filearray = grunt.config.get('sass_import_compiler').dist.files['tmp/tmp.scss'],
			match,
			matchHasPath,
			errorPath;
			
		test.expect((spl.length * 2) + 1);
		
		test.equal(filearray.length, spl.length,
				'file array length should match number of @imports in output file');
		
		grunt.file.setBase('tmp');
		
		spl.forEach(function(filepath) {
			
			match = filepath.match(/ '(.*)';/);
			
			matchHasPath = match instanceof Array && match.length > 1;
			
			test.ok(matchHasPath, 'import not properly formed: ' + filepath);
			
			// only reference match[1] if matchHasPath is true
			
			test.ok(matchHasPath && grunt.file.isFile(match[1] + '.scss'),
					'file path should point to file realtive to output file location.');
		});
		
		
		test.done();
	}
};

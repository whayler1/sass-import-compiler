# sass import compiler

> This plugin is for developers who use the [watch](https://github.com/gruntjs/grunt-contrib-watch) contrib to compile their [scss](https://github.com/gruntjs/grunt-contrib-sass) on file updates. It allows you to manage your main scss file @import's in a config array in your gruntfile. This way you do not have to do the duplicitive work of managing an array of scss files to watch and updating a list of files to import in your primary scss file.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install sass-import-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('sass-import-compiler');
```

## The "sass_import_compiler" task

### Overview
In your project's Gruntfile, add a section named `sass_import_compiler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sass_import_compiler: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

So far there are no options for this plugin.

### Usage Examples

#### Basic Setup
In this example, src/main.scss will be written to contain the three files below as @import partials.

```js
grunt.initConfig({
  sass_import_compiler: {
    files: {
      'src/main.scss': ['src/vars.scss', 'src/mixins.scss', 'src/header.scss'],
    }
  }
})
```
For this configuration, the contents of src/main.scss will be:

```scss
@import 'src/vars';
@import 'src/mixins';
@import 'src/header';
```

#### With Watch

I created this plugin with the idea of using it in tandem with the grunt watch contrib. The thought being that you maintain your scss dependencies in an array outside the grunt config, and then only have to maintain them in one place. You use watch to compile on any file updates and you use watch to monitor any change to your configuration and re-compile your scss @import list on your main file.

First you would have to manage your scss dependencies in a seperate array. This could be before your grunt.initConfig in gruntfile.js or in a seperate config file you require.

```js
var scss_dependencies = [
		'src/vars.scss',
		'src/mixins.scss',
		'src/header.scss'
	];
```

Then set up your grunt config so the sass plugin compiles from your sass_import_compiler destination file. Set up watch to run the sass task to any update to a file in scss_dependencies, and to run the sass_import_comiler task whenever the file containing scss_dependencies updates (in this case we'll assume it's managed in gruntfile.js).

```js
grunt.initConfig({
  sass_import_compiler: {
  	src: {
  	  files: {
        'src/main.scss': scss_dependencies
      }
  	}
  },
  sass: {
    dist: {
  	  files: {
  	    'dist/main.scss': 'src/main.scss'
  	  }
    }
  },
  watch: {
    gruntfile: {
      options: {
        reload: true,
        atBegin: true
      },
      files: [
        'gruntfile.js'
      ],
      tasks: [
        'sass_import_compiler:src'
      ]
    },
    sass: {
    	files: scss_dependencies,
    	tasks: [
    		'sass:dist'
    	]
    }
  }
})
```

## License
Copyright (c) 2014 Justin Worsdale. Licensed under the MIT license.

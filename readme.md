# sass import compiler

> This plugin is for developers who use the [watch](https://github.com/gruntjs/grunt-contrib-watch) contrib to compile their scss on file updates. It allows you to manage your main scss file @import's in a config array in your gruntfile. This way you do not have to do the duplicitive work of managing an array of scss files to watch and updating a list of files to import in your primary scss file.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install sass import compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('sass import compiler');
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

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  sass_import_compiler: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## License
Copyright (c) 2014 Justin Worsdale. Licensed under the MIT license.

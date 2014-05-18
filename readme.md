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

#### Simple usage
In this example, src/main.scss will be written to contain the three files below as @import partials.

```js
grunt.initConfig({
  sass_import_compiler: {
    files: {
      'src/main.scss': ['src/vars.scss', 'src/mixins.scss', 'src/header.scss'],
    },
  },
})
```
For this configuration, the contents of src/main.scss will read as
```scss
@import 'src/vars';
@import 'src/mixins';
@import 'src/header';
```

## License
Copyright (c) 2014 Justin Worsdale. Licensed under the MIT license.

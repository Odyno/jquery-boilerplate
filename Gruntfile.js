module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON('boilerplate.jquery.json'),

		// Banner definitions
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n' +
				' *\n' +
				' *  Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
				' *  MIT License\n' +
				' */\n'
		},

		// Concat definitions
		concat: {
			dist: {
				src: ['src/jquery.boilerplate.js'],
				dest: 'build/jquery.boilerplate.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		// Lint definitions
		jshint: {
			files: ['src/jquery.boilerplate.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ['build/jquery.boilerplate.js'],
				dest: 'build/jquery.boilerplate.min.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('travis', ['jshint']);

};
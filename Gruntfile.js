module.exports = function(grunt) {

  grunt.initConfig({
    // Change the b-fy task to add a transform task
    browserify: {
      js: {
        //take the main.js and create the dist/app.js file
          src: ['./js/main.js'],
          dest: 'dist/app.js'
      },
      options: {
        //What this does is it looks to see if there is a handlebars template and then it will compile it for us.
          transform: ['hbsfy']
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['./js/**/*.js']
    },
    // sass: {
    //   dist: {
    //     files: {
    //       './css/main.css': './sass/main.scss'
    //     }
    //   }
    // },
    watch: {
      javascripts: {
        files: ['./js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        //.hbs will be the new file extension for handlebars files
        files: ['./templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};
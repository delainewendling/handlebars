"use strict";

var Handlebars = require('hbsfy/runtime');
//pull in the template
var entryTemplate = require('../templates/article/article.hbs');
var solarSystemTemplate = require('../templates/article/solar-system.hbs');
var entryData = require('../templates/article/article-data.js');
var solarSystemData = require('../templates/article/solar-system-data.js');


//first argument is the name of the partial and the second argument is the data we want to inject. This allows us to create a reusable chunk (for a footer, etc)
Handlebars.registerPartial("tagline", require('../templates/partials/tagline.hbs'));

//Handlebars Helper Function. "inc" is the name of the helper function
Handlebars.registerHelper("inc", function(value){
  //parseInt just in case value is not a number
  return parseInt(value)+1;
});

//Add the view to the DOM (the rendered view )
$("#entryOutput").append(entryTemplate(entryData));
 $("#ssOutput").append(solarSystemTemplate(solarSystemData));
$('#ssOutput').hide();

$('#ssBtn').on("click", showSolarSystemData);

function showSolarSystemData (){
  $('#ssOutput').toggle();
}


//This is the template from which we will create a "view"
// var entryHTML = $("#entry-template").html();

// //Use handlebars to compile it into a template. This will return a new function where we can inject data.
// var entryTemplate = Handlebars.compile(entryHTML);

// //Render the resulting HTML be passing the data to the template
// var entryOutput = entryTemplate(entryData);






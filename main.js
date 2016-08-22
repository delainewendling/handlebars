"use strict";

var entryData = {
  title: "Delaine's Blog",
  body: "My first blog post",
  tags: [
    {
      category: "Technology",
      name: "Handlebars"
    },
    {
      category: "Author",
      name: "Delaine"
    }
  ]
}

//This is the template from which we will create a "view"
var entryHTML = $("#entry-template").html();

//Use handlebars to compile it into a template. This will return a new function where we can inject data.
var entryTemplate = Handlebars.compile(entryHTML);

//Render the resulting HTML be passing the data to the template
var entryOutput = entryTemplate(entryData);

//Add the view to the DOM
$("#entryOutput").append(entryOutput)
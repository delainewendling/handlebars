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
  ],
  //Move taglineData into the main template's context and then the precompiled partial can access it
  taglineData: {
    author_first_name: "Bubba",
    author_last_name: "Vanderwheat",
    authored_date: "January 29, 2017"
  }
}

module.exports = entryData;


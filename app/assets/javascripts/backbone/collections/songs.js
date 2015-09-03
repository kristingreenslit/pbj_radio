App.Collections.Songs = Backbone.Collection.extend({
  model: App.Models.Song,
  url: "/songs",

  initalize: function(){
    console.log("collection successful!")
  }
});

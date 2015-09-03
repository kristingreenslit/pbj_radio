App.Routers.Song = Backbone.Router.extend({
    routes: {
    '_' : 'index',
    '' : 'index',
    'songs/new' : 'newSong',
    'songs/:id/play' : 'playSong'
  },
  initialize: function(){
    App.Collections.songs = new App.Collections.Songs();
    App.Collections.songs.fetch();
    App.Views.songList = new App.Views.SongList({collection: App.Collections.songs});
  },
  newSong: function(){
      $("#new-song-modal").show();
    // App.Collections.songs.fetch();
    // App.Views.songCreate.toggleForm();
  },
  index: function(){
    $("#new-song-modal").hide();
  },
  playSong: function(id){
    App.Collections.songs.fetch().then(function() {
    view = App.Views.songList.findView(id);
    view.render();
    })
  }
});

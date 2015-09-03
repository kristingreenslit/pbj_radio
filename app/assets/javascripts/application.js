// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars.runtime
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree .

App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};


$(document).ready(function() {
  App.Routers.song = new App.Routers.Song();

  App.Collections.songs = new App.Collections.Songs();
  App.Collections.songs.fetch();
  App.Views.songList = new App.Views.SongList({collection: App.Collections.songs});

  Backbone.history.start(); //starts router

});

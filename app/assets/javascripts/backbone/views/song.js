App.Views.Song = Backbone.View.extend({
  className: 'song',
  tagName: 'div',

  initialize: function(){
    // this.listenTo(this.model, 'change', this.render)
    this.template = HandlebarsTemplates['songs/show'];
    this.render();
  },

  render: function(){
    event.preventDefault();
    this.$el.html(this.template(this.model.toJSON()));
  },

  renderPlayer: function(player) {
  var playerView = new App.Views.Player({model: player});
  this.$el.find(".song").append(playerView.$el);
  },

});

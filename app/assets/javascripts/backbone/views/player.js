App.Views.Player = Backbone.View.extend({
  className: 'player',
  tagName: 'div',

  events: {
  "click .song": "playSong"
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.template = HandlebarsTemplates['songs/play'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  playSong: function(){
    this.model.create();
    this.$el.fadeIn();
  }

});

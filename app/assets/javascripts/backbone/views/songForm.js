App.Views.Songs = Backbone.View.extend({
  el: "#createSong",

  events: {
  'click .new':    'toggleForm',
  // 'click .cancel': 'toggleForm',
  // 'click .submit': 'createSong'
  }

  // createSong: function(){
  //   event.preventDefault();
  //   var data = {
  //     title: this.$("[name='title']").val(),
  //     authorName: this.$("[name='authorName']").val(),
  //     content: this.$("[name='content']").val(),
  //     photoUrl: this.$("[name='photoUrl']").val()
  //   }
  //   this.collection.create(data);
  //   this.$el.find("input, textarea").val("");
  //   this.toggleForm();
  // },

});

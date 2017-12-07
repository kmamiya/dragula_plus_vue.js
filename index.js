vueobj = new Vue({
  el: '#content',
  data: function() {
    return {
      items: []
    };
  },
  created: function() {
    var i = 0;
    for(i = 0; i < 10; i ++) {
      var num = i + 1;
      this.items.push({
        id: num,
        name: "item " + num,
        position: i
      });
    }
  },
  mounted: function() {
    var _this = this;
    Vue.nextTick(function() {
      dragula(
        [document.querySelector('#drag_items')], {
        }
      ).on('drop', function(el, target, source, sibling) {
        console.log(el);
        console.log(sibling);
        console.log(el.getAttribute('data-position') + " -> " + sibling.getAttribute('data-position'));
      });
    });
  }
});

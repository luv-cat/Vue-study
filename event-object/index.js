var app = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    clickHandler: function (event) {
      this.counter++
      console.log(event);
    }
  }
})
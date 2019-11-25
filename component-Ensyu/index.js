Vue.component('button-counter', {
  // 関数である必要がある
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">{{ count }}</button>'
})

var app = new Vue({
  el: '#app',

})

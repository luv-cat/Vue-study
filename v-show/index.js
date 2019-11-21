var app = new Vue({
  el: '#app',
  data: {
    toggle: true
  },
  methods: {
    onClick: function () {
      if(this.toggle == true){
        this.toggle = false
      }else{
        this.toggle = true
      }
    }
  }
})

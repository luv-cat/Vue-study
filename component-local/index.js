var helloComponent = {
  template: '<p>Hello</P>'
}

var app = new Vue({
  el: '#app',
  components: {
    'hello-component': helloComponent
  }
})

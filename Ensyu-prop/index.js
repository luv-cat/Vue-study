var app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    // fullName: ''
  },
  // 監視プロパティだと長くなる
  // watch: {
  //   firstName: function (value) {
  //     this.fullName = value + ' ' + this.lastName
  //   },
  //   lastName: function (value) {
  //     this.fullName = this.firstName + ' ' + value
  //   }
  // },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
})

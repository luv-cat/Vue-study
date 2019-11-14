var app = new Vue({
  el: '#app',
  data: {
    colors: [
      { name: 'Red' },
      { name: 'Blue' },
      { name: 'Green' }
    ]
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
        console.log('new: %s, oldValue:%s',
        JSON.stringify(newValue, null, '\t'),
        JSON.stringify(oldValue, null, '\t'))
        // JSON.stringifyはJSON文字列に変換する
      },
      // deepオプションを省略すると、false扱いとなる
      deep: true
    }
  }

})

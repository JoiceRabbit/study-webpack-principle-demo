console.log('123')

let btn = document.getElementById('btn')
btn.addEventListener('click', function() {
  import(/* webpackChunkName: 'login' */ './login.js').then(data => {
    console.log('login', data)
  })
  import(/* webpackChunkName: 'home' */ './home.js').then(data => {
    console.log('home', data)
  })
})

module.exports = '导出内容'

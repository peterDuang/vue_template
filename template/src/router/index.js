import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/helloworld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title:'欢迎页'
      }
    }
  ]
})

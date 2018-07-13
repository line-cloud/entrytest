import Vue from 'vue'
import Router from 'vue-router'

// import views from '@/views/navTop'

// import  studentSingleWithSingle from '@/components/myStudentInfoList/singleWithSingle'
import index from '@/views/index'
import resultShow from '@/views/resultShow'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'index',
      redirect:'index',
      component: index,
     },
     {
       path:'/index',
       name: 'index',
       component: index,
     },
      {
      path: '/resultShow',
      name: 'resultShow',
      component: resultShow,
     },
     {
      path: '/test',
      name: 'test',
      component: test,
     },
  ]
})

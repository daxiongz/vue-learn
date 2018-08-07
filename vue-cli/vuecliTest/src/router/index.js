import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history', //url 中不带 #
  // mode: 'hash', //默认值，url 中带 #
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      },
      alias: '/indexPage'
    },
    {
      path: '/hi',
      name: 'hi',
      components: {
        default: Hi,
        left: Hi2,
        right: Hi1
      },
      alias: '/daxiong'
    },
    {
      path: '/params/:newsId/:newsTitle',
      name: 'news',
      component: Params,
      // 路由配置文件中只能写此一个钩子函数
      beforeEnter: (to, from, next) => {
        console.log('我进入了 Params 模板')
        console.log(to)
        console.log(from)
        // console.log(next);
        // next 是否进行下一步，next(true/false). next({ path: '/'}) 也可指示下一步跳到哪里去
        // next({ path: '/'} );
        next()
      }
    },
    {
      path: '/goback',
      name: 'back',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId/:newsTitle',
      redirect: '/params/:newsId/:newsTitle'
    },
    {
      path: '*',
      name: 'notFound',
      component: Error
    }
  ]
})

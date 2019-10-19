import Vue from 'vue'
import Router from 'vue-router'

let requireComponent = require.context('./../views', true, /[a-z0-9]+\.vue$/i, 'lazy')
// let layoutComponent  = require.context('./../layout', true, /[a-z0-9]+\.vue$/i, 'lazy')
const keys = requireComponent.keys()
let routes = [
  {
    path: '/',
    name: 'sliderLayout',
    component: () => import('@/layout/sliderLayout'),
    children: [],
  }
]
keys.forEach(item => {
  const name = item.match(/\/(\S*).vue/)[1]
  const path = item.match(/.\/(\S*).vue/)[1].toLowerCase()
  routes[0].children.push({
    name,
    component: () => requireComponent(item),
    path,
  })
})
console.log(routes)
Vue.use(Router);

export default new Router({
  routes,
});

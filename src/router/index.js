import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const profile = () => import("../views/ProFile")
const moneyManage = () => import("../views/MoneyManage")
const avaluate = () => import("../views/Avaluate")
const message = () => import("../views/Message")
const my = () => import("../views/My")


const routes = [
  {path: "",redirect: "/profile"},
  {path: "/profile",component: profile},
  {path: "/avaluate",component: avaluate},
  {path: "/moneyManage",component: moneyManage},
  {path: "/message",component: message},
  {path: "/my",component: my}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

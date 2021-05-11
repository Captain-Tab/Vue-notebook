import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Login from "../views/login/Login.vue"
import List from "../views/list/List.vue"
import Note from "@/views/note/Note.vue"
import Bin from "@/views/bin/Bin.vue"
import Home from "@/views/Home.vue"

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/list",
    name: "list",
    component: List
  },
  {
    path: "/note/:noteId",
    name: "note",
    component: Note
  },
  {
    path: "/bin/:noteId",
    name: "bin",
    component: Bin
  }
];

const router = new VueRouter({
  routes,
});

export default router;

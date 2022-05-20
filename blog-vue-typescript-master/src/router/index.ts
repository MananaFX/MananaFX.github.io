import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/helloWorld",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
      path: "/articles",
      name: "articles",
      // route level code-splitting
      // this generates a separate chunk (articles.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "articles" */ "../views/Articles.vue")
    },
    {
        path: "/reviewNotes",
        name: "reviewNotes",
        // route level code-splitting
        // this generates a separate chunk (articles.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "reviewNotes" */ "../views/ReviewNotes.vue")
    },
    {
      path: "/archive",
      name: "archive",
      component: () =>
        import(/* webpackChunkName: "archive" */ "../views/Archive.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () =>
        import(/* webpackChunkName: "timeline" */ "../views/Timeline.vue")
    },
    {
      path: "/project",
      name: "project",
      component: () =>
        import(/* webpackChunkName: "project" */ "../views/Project.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/OldArticleDetail.vue")
    },
    {
      path: "/articleDetail",
      name: "articleDetail",
      component: () =>
        import(/* webpackChunkName: "articleDetail" */ "../views/ArticleDetail.vue")
    },
    {
        path: "/noteDetail",
        name: "noteDetail",
        component: () =>
            import(/* webpackChunkName: "noteDetail" */ "../views/NoteDetail.vue")
    },
    {
        path: "/loveStory",
        name: "loveStory",
        component: () =>
            import(/* webpackChunkName: "loveStory" */ "../views/LoveStory.vue")
    },
    {
        path: "/login",
        name: "登录",
        component: () =>
            import(/* webpackChunkName: "登录" */ "../views/Login.vue")
    },
    {
        path: "/counting",
        name: "countingt",
        component: () =>
            import(/* webpackChunkName: "Counting" */ "../views/Counting.vue")
    }
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

let counter = 0;
router.beforeEach((to, from) => {
    console.log(`进行了${++counter}路由跳转`)
    if (to.path !== "/login" && to.path !=="/" && to.path !="/reviewNotes" && to.path != "/noteDetail" && to.path !="/articles") {
        const token = window.localStorage.getItem("token");
        if (!token) {
            return "/login"
        }
    }
})
export default router;

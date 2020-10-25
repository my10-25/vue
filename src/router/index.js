import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/findbeaty',
    name: 'FindBeaty',
    component: () =>
        import ('@/pages/FindBeaty'),
    children: [{
            path: 'hot',
            name: 'Hot',
            component: () =>
                import ('@/pages/Hot'),
        },
        {
            path: 'attention',
            name: 'Attention',
            component: () =>
                import ('@/pages/Attention')
        },
        {
            path: 'newest',
            name: 'Newest',
            component: () =>
                import ('@/pages/Newest')
        }
    ],
    redirect: '/findbeaty/hot'
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
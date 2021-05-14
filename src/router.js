import Router from 'vue-router'
import Home from './components/Home.vue'
import Events from './components/Events.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/events',
            component: Events
        }
    ]
})

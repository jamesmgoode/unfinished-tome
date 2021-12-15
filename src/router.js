import Router from 'vue-router'
import Home from './pages/Home.vue'
import Events from './pages/Events.vue'
import Rules from './pages/Rules.vue'
import World from './pages/World.vue'
import Lineage from './pages/Lineage.vue'

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
        },
        {
            path: '/rules',
            component: Rules
        },
        {
            path: '/world',
            component: World
        },
        {
            path: '/lineage',
            component: Lineage
        }
    ]
})

import Router from 'vue-router'
import Home from './components/Home.vue'
import Events from './components/Events.vue'
import Rules from './components/Rules.vue'
import World from './components/World.vue'

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
        }
    ]
})

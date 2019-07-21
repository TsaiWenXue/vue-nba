import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/nba-news',
            name: 'NbaNews',
            component: News
        }
    ]
})
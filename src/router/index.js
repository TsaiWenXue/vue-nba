import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/nba-news',
            name: 'NbaNews',
            component: News
        }
    ]
})
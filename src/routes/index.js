//import App from '@/App.vue'

const Index = { template: '<div>Index</div>' }
const _404 = { template: '<div>404</div>' }
export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '*',
        component: _404
    }
]

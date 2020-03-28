export default {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录页'
    },
    component:resolve => require.ensure([], () => resolve(require('@/components/login.vue')), 'login'),
}

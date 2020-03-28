export default {
    path: '/register',
    name:'register',
    meta: {
        title: '注册页'
    },
    component:resolve => require.ensure([], () => resolve(require('@/components/register.vue')), 'register'),
    // component: () => import('@/components/register.vue')
}
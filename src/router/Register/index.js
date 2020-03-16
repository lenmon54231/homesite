export default {
    path: '/register',
    name:'register',
    component:resolve => require.ensure([], () => resolve(require('@/components/register.vue')), 'register'),
    // component: () => import('@/components/register.vue')
}
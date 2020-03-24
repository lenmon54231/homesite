export default {
    path: '/loading',
    name: 'loading',
    component:resolve => require.ensure([], () => resolve(require('@/components/loading.vue')), 'loading'),
}
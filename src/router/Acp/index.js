export default {
    path:'/acp',
    name:'acp',
    meta: {
        title: 'ACP证书'
    },
    component:resolve => require.ensure([], () => resolve(require('@/components/acp.vue')), 'acp'),
}
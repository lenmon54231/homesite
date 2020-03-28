export default {
    path:"/center",
    name:"center",
    meta: {
        title: '个人中心'
    },
    component:resolve => require.ensure([], () => resolve(require('@/components/center.vue')), 'center')
}
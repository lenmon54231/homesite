export default {
    path:"/center",
    name:"center",
    meta:{
        needLogin: true
    },
    component:resolve => require.ensure([], () => resolve(require('@/components/center.vue')), 'center')
}
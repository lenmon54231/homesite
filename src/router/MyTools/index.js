export default {
    path:'/mytools',
    name:'mytools',
    meta: {
        title: '工具页'
    },
    component:resolve => require.ensure([], () => resolve(require('@/views/MyTools.vue')), 'mytools'),
}
export default {
    path:'/mytools',
    name:'mytools',
    // component:()=> import('@/views/MyTools.vue')
    component:resolve => require.ensure([], () => resolve(require('@/views/MyTools.vue')), 'mytools'),
}
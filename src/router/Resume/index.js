export default {
    path:'/resume',
    name:'resume',
    meta: {
        title: '简历页'
    },
    // component:()=> import('@/views/MyTools.vue')
    component:resolve => require.ensure([], () => resolve(require('@/components/resume.vue')), 'resume'),
}
export default {
    path:'/resume',
    name:'resume',
    // component:()=> import('@/views/MyTools.vue')
    component:resolve => require.ensure([], () => resolve(require('@/components/resume.vue')), 'resume'),
}
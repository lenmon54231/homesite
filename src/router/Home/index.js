// export default{
//     path:'/home',
//     component:()=> import('@/views/Home.vue')
// }
export default {
    path: '/home',
    name: 'home',
    // component: () => import('@/views/Home.vue'),
    component:resolve => require.ensure([], () => resolve(require('@/views/Home.vue')), 'home'),
}
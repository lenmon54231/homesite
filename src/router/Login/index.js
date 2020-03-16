export default {
    path: '/login',
    name: 'login',
    // component: () => import('@/components/login.vue'),
    component:resolve => require.ensure([], () => resolve(require('@/components/login.vue')), 'login'),
}

// export default {
//     path:'/register',
//     component:()=> import ('@/components/center.vue')
// }

export default {
    path: '/mall',
    name:'mall',
    component:resolve => require.ensure([], () => resolve(require('@/views/Mall.vue')), 'mall'),
    // component: () => import('@/views/Mall.vue'),
    children: [
        {
            path: 'detail/:movieId',
            component: () => import('@/components/detail.vue'),
            props: true,
            
        },
        {
            path: 'movieList',
            component: () => import('@/components/movieList.vue'),
        },
        {
            path: '/mall',
            redirect: '/mall/movieList',
        },
        {
            path: 'pay',
            component: () => import('@/components/pay.vue'),
        }
    ]
}

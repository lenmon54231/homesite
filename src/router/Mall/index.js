export default {
    path: '/mall',
    component:resolve => require.ensure([], () => resolve(require('@/views/Mall.vue')), 'mall'),
    children: [
        {
            path: 'detail/:movieId',
            name:'detail',
            component: () => import('@/components/detail.vue'),
            props: true,
            
        },
        {
            path: 'movieList',
            name:'movieList',
            component: () => import('@/components/movieList.vue'),
        },
        {
            path: '/mall',
            name:'mall',
            redirect: '/mall/movieList',
        },
        {
            path: 'pay',
            name:'pay',
            component: () => import('@/components/pay.vue'),
        }
    ]
}

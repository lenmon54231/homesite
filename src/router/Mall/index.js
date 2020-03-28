export default {
    path: '/mall',
    meta: {
        title: '乐檬电影网'
    },
    component: resolve => require.ensure([], () => resolve(require('@/views/Mall.vue')), 'mall'),
    children: [
        {
            path: 'detail/:movieId',
            name: 'detail',
            component: () => import('@/components/detail.vue'),
            props: true,

        },
        {
            path: 'movieList',
            name: 'movieList',
            meta: {
                title: '乐檬电影网'
            },
            component: () => import('@/components/movieList.vue'),
        },
        {
            path: '/mall',
            name: 'mall',
            redirect: '/mall/movieList',
        },
        {
            path: 'pay',
            name: 'pay',
            component: () => import('@/components/pay.vue'),
        }
    ]
}

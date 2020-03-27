import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/discovery' },
  { path: '/discovery', component: () => import('@/views/Discovery/Discovery') },
  {
    path: '/playlist',
    component: () => import('@/views/Playlist/Playlist'),
    children: [
      {
        path: ':id',
        component: () => import('@/basecom/PlaylistDetail/PlaylistDetail')
      }
    ]

  },
  { path: '/newmusic', component: () => import('@/views/Newmusic/Newmusic') },
  {
    path: '/newmv',
    component: () => import('@/views/Newmv/Newmv'),
    children: [
      {
        path: ':id',
        component: () => import('@/basecom/MvDetail/MvDetail')
      }
    ]
  },
  { path: '/search', component: () => import('@/views/Search/Search') }
]




const router = new VueRouter({
  routes
})



export default router

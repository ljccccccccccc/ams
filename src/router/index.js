import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './../store/index';

import Index from '@/pages/index';
import Welcome from '@/pages/welcome';

import IndexEcharts from '@/combination/IndexEcharts';
import Table from '@/components/Table';
import NewCorrelation from '@/combination/NewCorrelation';
import IndexSearch from './../combination/IndexSearch';
import IndexChangeCorrelation from '@/combination/IndexChangeCorrelation.vue';
import IndexRepair from '@/combination/IndexRepair';
import IndexAddBasicData from '@/combination/IndexAddBasicData';
import IndexInbound from '@/combination/IndexInbound';
import IndexQueryRepair from '@/combination/IndexQueryRepair';
import IndexScrap from '@/combination/IndexScrap';

Vue.use(VueRouter);

if (window.localStorage.getItem('isLogin')) {
    store.commit('setIsLogin', window.localStorage.getItem('isLogin'));
  }

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: 'echarts',
                    name: 'index_echarts',
                    component: IndexEcharts,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'table',
                    name: 'kingorld_table',
                    component: Table,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'newCorrelation',
                    name: 'index_newCorrelation',
                    component: NewCorrelation,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'search',
                    name: 'search',
                    component: IndexSearch,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'changeCorrelation',
                    name: 'index_changeCorrelation',
                    component: IndexChangeCorrelation,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'repair',
                    name: 'index_repair',
                    component: IndexRepair,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'addBasicData',
                    name: 'index_addBasicData',
                    component: IndexAddBasicData,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'inbound',
                    name: 'index_inbound',
                    component: IndexInbound,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'queryRepair',
                    name: 'index_query_repair',
                    component: IndexQueryRepair,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'scrap',
                    name: 'index_scrap',
                    component: IndexScrap,
                    meta: {
                        requiresAuth: true
                    }
                }
            ],
            redirect: 'echarts'
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome,
            meta: {
                requiresAuth: false
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.matched.some(r => r.meta.requiresAuth)) {  
      // 通过vuex 如果当前有登录
      if (store.getters.isLogin) {  
        next();
      }
      else {
        window.console.log("没有登录吖")
        next({
          path: '/welcome',
          query: {redirect: to.fullPath}
        })
      }
    }
    else {
      next();
    }
  });

export default router;
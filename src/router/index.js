import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import EquipOverview from '../pages/EquipOverview/index.vue';
import PartDetail from '../pages/PartDetail/index.vue';
import ParamSet from '../pages/ParamSet/index.vue';
import DataManage from '../pages/DataManage/index.vue';
import Instruct from '../pages/Instruct/index.vue';
import SupportingBearing from '../pages/SupportingBearing/index.vue';
import Screw from '../pages/Screw/index.vue';
import Motor from '../pages/Motor/index.vue';
import Nut from '../pages/Nut/index.vue';
import FixedBearing from '../pages/FixedBearing/index.vue';

Vue.use(Router);

// 下边这三行代码可以修复“重复点击某路由链接时会报错”的bug
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default new Router({
  routes: [
    { path: "/", redirect: '/home' },
    {
      path: '/home',
      component: Home,
      redirect: '/equipoverview',
      children: [
        { path: '/equipoverview', component: EquipOverview },
        { path: '/partdetail', component: PartDetail },
        { path: '/paramset', component: ParamSet },
        { path: '/datamanage', component: DataManage },
        { path: '/instruct', component: Instruct },
        { path: '/supportingbearing', component: SupportingBearing },
        { path: '/screw', component: Screw },
        { path: '/motor', component: Motor },
        { path: '/nut', component: Nut },
        { path: '/fixedbearing', component: FixedBearing },
      ]
    },
  ]
});
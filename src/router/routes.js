import DashboardLayout from "@/layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
// TODO: Name should not be hardcoded.
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/bash-prompt",
    children: [
      {
        path: "bash-prompt",
        name: "Bash Prompt",
        component: Dashboard
      },
      {
        path: "profile",
        name: "about me",
        component: Profile
      },
      {
        path: "aliases",
        name: "aliases",
        component: Notifications
      },
      {
        path: "custom-functions",
        name: "custom functions",
        component: Icons
      },
      {
        path: "more-config",
        name: "more config",
        component: Typography
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

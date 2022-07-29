const Home = () => import("../views/Home");
const Albums = () => import("../views/Albums");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/albums",
    name: "albums",
    component: Albums,
  },
];

export default routes;

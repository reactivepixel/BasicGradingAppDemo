import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Profile = React.lazy(() => import('./views/Profile'));
const Settings = React.lazy(() => import('./views/Settings'));
const Products = React.lazy(() => import('./views/Products'));
const Stores = React.lazy(() => import('./views/Stores'));
const FormStore = React.lazy(() => import('./views/FormStore'));
const Product = React.lazy(() => import('./views/Product'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', name: 'Admin Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/settings', name: 'Settings', component: Settings },
  
  { path: '/stores', name: 'Stores', component: Stores },
  { path: '/store/form/', name: 'Add Store', component: FormStore },
  // { path: '/store/form/:store_id/', name: 'Store [Edit]', component: FormStore },
  { path: '/:store_id/products', name: 'Store Products', component: Products },
  
  { path: '/product/id', name: 'Product', component: Product },
];

export default routes;

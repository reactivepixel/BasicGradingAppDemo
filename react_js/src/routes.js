import React from 'react';

const Students = React.lazy(() => import('./views/Students'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Students },
  { path: '/students', name: 'Students', component: Students },
];

export default routes;

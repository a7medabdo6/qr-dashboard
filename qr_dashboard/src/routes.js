/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthEditLayout from './layouts/AuthEdit';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardManagerLayout from './layouts/DashboardManager';

import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';

export const Authroutes = [
  {
    path: '/auth',
    component: AuthEditLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },

      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export const DashboardUser = [
  {
    path: '/auth',
    component: AuthEditLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },

      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  // {
  //   path: '/SuperuserLayout',
  //   component: SuperuserLayout,
  //   routes: [
  //     {
  //       path: '/SuperuserLayout/test',
  //       exact: true,
  //       component: lazy(() => import('views/Login'))
  //     },
  //     {
  //       path: '/auth/register',
  //       exact: true,
  //       component: lazy(() => import('views/Register'))
  //     },
  //     {
  //       path: '/SuperuserLayout/analytics',
  //       exact: true,
  //       component: DashboardAnalyticsView
  //     },
  //     {
  //       path: '/SuperuserLayout/default',
  //       exact: true,
  //       component: DashboardDefaultView
  //     },
  //     {
  //       component: () => <Redirect to="/errors/error-404" />
  //     }
  //   ]
  // },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/user/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('views/Calendar'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('views/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('views/InvoiceDetails'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('views/KanbanBoard'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('views/Mail'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('views/ProjectManagementList'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('views/OrderManagementList'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('views/OrderManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('views/ProjectCreate'))
      },
      {
        path: '/users',
        exact: true,
        component: lazy(() => import('views/users'))
      },
      {
        path: '/users/create',
        exact: true,
        component: lazy(() => import('views/Register/index'))
      },
      {
        path: '/users/edit/:id',
        exact: true,
        component: lazy(() => import('views/users/UserEdit'))
      },
      {
        path: '/tenants',
        exact: true,
        component: lazy(() => import('views/tenants'))
      },
      {
        path: '/tenants/create',
        exact: true,
        component: lazy(() => import('views/tenants/TenantCreate'))
      },
      {
        path: '/tenants/edit/:id',
        exact: true,
        component: lazy(() => import('views/tenants/TenantEdit'))
      },
      // {
      //   path: '/branches',
      //   exact: true,
      //   component: lazy(() => import('views/BranchList'))
      // },
      // {
      //   path: '/branch/create',
      //   exact: true,
      //   component: lazy(() => import('views/BranchList/BranchCreate'))
      // },
      {
        path: '/menu',
        exact: true,
        component: lazy(() => import('views/menuList'))
      },
      {
        path: '/menu/create',
        exact: true,
        component: lazy(() => import('views/menuList/MenuCreate'))
      },
      {
        path: '/menu/edit/:id',
        exact: true,
        component: lazy(() => import('views/menuList/MenuCreate'))
      },

      {
        path: '/category',
        exact: true,
        component: lazy(() => import('views/CategoryList'))
      },
      {
        path: '/category/create',
        exact: true,
        component: lazy(() => import('views/CategoryList/CategoryCreate'))
      },
      {
        path: '/category/edit/:id',
        exact: true,
        component: lazy(() => import('views/CategoryList/CategoryCreate'))
      },
      {
        path: '/menu/modify/:id',
        exact: true,
        component: lazy(() => import('views/menuList/MenuModify'))
      },
      {
        path: '/products',
        exact: true,
        component: lazy(() => import('views/ProductManagementList'))
      },
      {
        path: '/products/create',
        exact: true,
        component: lazy(() =>
          import('views/ProductManagementList/ProductCreate')
        )
      },
      {
        path: '/categories',
        exact: true,
        component: lazy(() => import('views/Categories'))
      },
      {
        path: '/category/create',
        exact: true,
        component: lazy(() => import('views/CategoryCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('views/ProjectList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('views/SocialFeed'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('views/GettingStarted'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export const DashboardManager = [
  {
    path: '/auth',
    component: AuthEditLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },

      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  // {
  //   path: '/SuperuserLayout',
  //   component: SuperuserLayout,
  //   routes: [
  //     {
  //       path: '/SuperuserLayout/test',
  //       exact: true,
  //       component: lazy(() => import('views/Login'))
  //     },
  //     {
  //       path: '/auth/register',
  //       exact: true,
  //       component: lazy(() => import('views/Register'))
  //     },
  //     {
  //       path: '/SuperuserLayout/analytics',
  //       exact: true,
  //       component: DashboardAnalyticsView
  //     },
  //     {
  //       path: '/SuperuserLayout/default',
  //       exact: true,
  //       component: DashboardDefaultView
  //     },
  //     {
  //       component: () => <Redirect to="/errors/error-404" />
  //     }
  //   ]
  // },
  {
    route: '*',
    component: DashboardManagerLayout,
    routes: [
      {
        path: '/user/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('views/Calendar'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('views/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/',
        exact: true,
        component: DashboardDefaultView
      },
      // {
      //   path: '/invoices/:id',
      //   exact: true,
      //   component: lazy(() => import('views/InvoiceDetails'))
      // },
      // {
      //   path: '/kanban-board',
      //   exact: true,
      //   component: lazy(() => import('views/KanbanBoard'))
      // },
      // {
      //   path: '/mail',
      //   exact: true,
      //   component: lazy(() => import('views/Mail'))
      // },
      // {
      //   path: '/management/customers',
      //   exact: true,
      //   component: lazy(() => import('views/CustomerManagementList'))
      // },
      // {
      //   path: '/management/customers/:id',
      //   exact: true,
      //   component: lazy(() => import('views/CustomerManagementDetails'))
      // },
      // {
      //   path: '/management/customers/:id/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/CustomerManagementDetails'))
      // },
      // {
      //   path: '/management/projects',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectManagementList'))
      // },
      // {
      //   path: '/management/orders',
      //   exact: true,
      //   component: lazy(() => import('views/OrderManagementList'))
      // },
      // {
      //   path: '/management/orders/:id',
      //   exact: true,
      //   component: lazy(() => import('views/OrderManagementDetails'))
      // },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      // {
      //   path: '/projects/create',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectCreate'))
      // },
      {
        path: '/groups',
        exact: true,
        component: lazy(() => import('views/Groups'))
      },
      {
        path: '/groups/create',
        exact: true,
        component: lazy(() => import('views/Groups/GroupCreate'))
      },
      {
        path: '/groups/edit/:id',
        exact: true,
        component: lazy(() => import('views/Groups/GroupEdit'))
      },
      {
        path: '/branches',
        exact: true,
        component: lazy(() => import('views/Branches'))
      },
      {
        path: '/branches/create',
        exact: true,
        component: lazy(() => import('views/Branches/BranchCreate'))
      },
      {
        path: '/branches/edit/:id',
        exact: true,
        component: lazy(() => import('views/Branches/BranchEdit'))
      },
      {
        path: '/users',
        exact: true,
        component: lazy(() => import('views/users'))
      },
      {
        path: '/users/create',
        exact: true,
        component: lazy(() => import('views/Register/index'))
      },
      {
        path: '/users/edit/:id',
        exact: true,
        component: lazy(() => import('views/users/UserEdit'))
      },

      // {
      //   path: '/branches',
      //   exact: true,
      //   component: lazy(() => import('views/BranchList'))
      // },
      // {
      //   path: '/branch/create',
      //   exact: true,
      //   component: lazy(() => import('views/BranchList/BranchCreate'))
      // },
      {
        path: '/menu',
        exact: true,
        component: lazy(() => import('views/menuList'))
      },
      {
        path: '/menu/create',
        exact: true,
        component: lazy(() => import('views/menuList/MenuCreate'))
      },
      {
        path: '/menu/edit/:id',
        exact: true,
        component: lazy(() => import('views/menuList/MenuCreate'))
      },
      {
        path: '/menu/modify/:id',
        exact: true,
        component: lazy(() => import('views/menuList/MenuModify'))
      },
      {
        path: '/category',
        exact: true,
        component: lazy(() => import('views/CategoryList'))
      },
      {
        path: '/category/create',
        exact: true,
        component: lazy(() => import('views/CategoryList/CategoryCreate'))
      },
      {
        path: '/category/edit/:id',
        exact: true,
        component: lazy(() => import('views/CategoryList/CategoryCreate'))
      },
      // {
      //   path: '/products',
      //   exact: true,
      //   component: lazy(() => import('views/ProductManagementList'))
      // },
      // {
      //   path: '/products/create',
      //   exact: true,
      //   component: lazy(() =>
      //     import('views/ProductManagementList/ProductCreate')
      //   )
      // },
      // {
      //   path: '/categories',
      //   exact: true,
      //   component: lazy(() => import('views/Categories'))
      // },
      // {
      //   path: '/category/create',
      //   exact: true,
      //   component: lazy(() => import('views/CategoryCreate'))
      // },
      // {
      //   path: '/projects/:id',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectDetails'))
      // },
      // {
      //   path: '/projects/:id/:tab',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectDetails'))
      // },
      // {
      //   path: '/projects',
      //   exact: true,
      //   component: lazy(() => import('views/ProjectList'))
      // },
      {
        path: '/ingredients',
        exact: true,
        component: lazy(() => import('views/IngredientList'))
      },
      {
        path: '/ingredients/create',
        exact: true,
        component: lazy(() => import('views/IngredientList/IngredientCreate'))
      },
      {
        path: '/ingredients/edit/:id',
        exact: true,
        component: lazy(() => import('views/IngredientList/IngredientCreate'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      // {
      //   path: '/social-feed',
      //   exact: true,
      //   component: lazy(() => import('views/SocialFeed'))
      // },
      // {
      //   path: '/getting-started',
      //   exact: true,
      //   component: lazy(() => import('views/GettingStarted'))
      // },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

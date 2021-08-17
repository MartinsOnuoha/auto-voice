const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      {
        path: 'explore', meta: { requiresAuth: true }, name: 'Explore', component: () => import('pages/Explore.vue'),
      },
      {
        path: 'customize/:name',
        name: 'Customize',
        props: true,
        component: () => import('pages/Customize.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'saved-invoices',
        name: 'SavedInvoices',
        component: () => import('pages/Invoices.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'settings',
        component: () => import('pages/Setting.vue'),
        meta: { requiresAuth: true },
      },
      { path: 'logout', redirect: '/' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

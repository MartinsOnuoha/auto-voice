const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'explore', component: () => import('pages/Explore.vue') },
      {
        path: 'customize/:name', name: 'Customize', props: true, component: () => import('pages/Customize.vue'),
      },
      { path: 'saved-invoices', name: 'SavedInvoices', component: () => import('pages/Invoices.vue') },
      { path: 'settings', component: () => import('pages/Setting.vue') },
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

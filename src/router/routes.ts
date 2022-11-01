import { RouteRecordRaw } from 'vue-router';

export const ROUTE_NAMES = {
  TODOS: {
    LIST: 'todos-list',
    ADD: 'add-todo',
    EDIT: 'edit-todo',
  },
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: ROUTE_NAMES.TODOS.LIST,
        component: () => import('src/pages/TodosPage.vue'),
      },
      {
        path: 'todo/add',
        name: ROUTE_NAMES.TODOS.ADD,
        component: () => import('src/pages/AddTodoPage.vue'),
      },
      {
        path: 'todo/:id',
        name: ROUTE_NAMES.TODOS.EDIT,
        component: () => import('src/pages/TodoDetailPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

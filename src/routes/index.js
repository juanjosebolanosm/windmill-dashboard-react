import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Productos = lazy(() => import('../pages/Productos'))
const Restaurantes = lazy(() => import('../pages/Restaurantes'))
const EditarRestaurante = lazy(() => import('../pages/EditarRestaurante'))
const Domiciliarios = lazy(() => import('../pages/Domiciliarios'))
const Managers = lazy(() => import('../pages/Managers'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const EditarDomiciliario = lazy(() => import('../pages/EditarDomiciliario'))
const EditarManager = lazy(() => import('../pages/EditarManager'))
const EditarProducto = lazy(() => import('../pages/EditarProducto'))
const CrearRestaurante = lazy(() => import('../pages/CrearRestaurante'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/restaurantes', // the url
    component: Restaurantes, // view rendered
  },
  {
    path: '/domiciliarios',
    component: Domiciliarios,
  },
  {
    path: '/restauranteEditar/:id',
    component: EditarRestaurante,
  },
  {
    path: '/domiciliarioEditar/:id',
    component: EditarDomiciliario,
  },
  {
    path: '/managerEditar/:id',
    component: EditarManager,
  },
  {
    path: '/productoEditar/:id',
    component: EditarProducto,
  },
  {
    path: '/restauranteCrear/',
    component: CrearRestaurante,
  },
  {
    path: '/managers',
    component: Managers,
  },
  {
    path: '/productos',
    component: Productos,
  },
  {
    path: '/forms',
    component: EditarRestaurante,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes

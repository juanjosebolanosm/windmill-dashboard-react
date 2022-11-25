/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/restaurantes', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Restaurantes', // name that appear in Sidebar
  },
  {
    path: '/app/domiciliarios', // the url
    icon: 'FormsIcon', // the component being exported from icons/index.js
    name: 'Domiciliarios', // name that appear in Sidebar
  },
  {
    path: '/app/managers', // the url
    icon: 'PeopleIcon', // the component being exported from icons/index.js
    name: 'Managers', // name that appear in Sidebar
  },
  {
    path: '/app/productos', // the url
    icon: 'CartIcon', // the component being exported from icons/index.js
    name: 'Productos', // name that appear in Sidebar
  },


]

export default routes

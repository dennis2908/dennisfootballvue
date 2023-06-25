import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Users
//Areas Data
const Areas = () => import('@/views/areas/Areas')

//Teams Data
const Teams = () => import('@/views/teams/Teams')

//Players Data
const Players = () => import('@/views/players/Players')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/areas/list',
      name: 'Home',
      component: TheContainer,
      children: [
		{
          path: 'areas',
          redirect: 'Areas',
          name: 'Areas Data',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
		    {
			  path: 'list',
			  name: 'List Areas',
			  component: Areas
			}
          ]
        },
		{
          path: 'teams',
          redirect: 'Teams',
          name: 'Teams Data',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
		    {
			  path: 'list',
			  name: 'List Teams',
			  component: Teams
			}
          ]
        },
		{
          path: 'players',
          redirect: 'Players',
          name: 'Players Data',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
		    {
			  path: 'list',
			  name: 'List Players',
			  component: Players
			}
          ]
        }
      ]
    }
  ]
}


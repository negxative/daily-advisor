import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from '../Components/HomeScreen/Home'
import { SearchScreen } from '../Components/SearchScreen/SearchScreen'

export const Router = () => {
  const routes=useRoutes([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/search",element:<SearchScreen/>
    }
  ])

  return routes;
}

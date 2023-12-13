import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Error from './pages/Error'
import Home from './pages/Home'
import Root from './pages/Root'
import Project from './pages/Project'
import About from './pages/About'
//import { Outlet } from 'react-router-dom'
import Contact from './pages/Contact'
import { ThemeProvider } from "@/components/theme-provider"

const routerArray = [
  { 
    path: '/',
    element: <Root/>,
    //errorElement: <Error/>,
    children: [
      {
        index: true,
        // path: 'login',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
			{
				path: ':p',
				element: <Project/>
			},
			{
				path: 'contact',
				element: <Contact/>
			}
    ]
  }
]
const router = createBrowserRouter(routerArray)

  
export default function App() {
  return <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"><RouterProvider 
    router={router} 
    fallbackElement={<div>Loading...</div>}
  />
	</ThemeProvider>
}





import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailsMovie from './components/details/DetailsMovie'
import Search from './components/search/Search'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/details/:platform/:movieId",
    element: <DetailsMovie/>
  },
  {
    path: "/search",
    element: <Search/>
  }
])

const fonts = {
  body: 'Montserrat',
}

const theme = extendTheme({ fonts });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
      {/* <App /> */}
    </ChakraProvider>
  </React.StrictMode>,
)

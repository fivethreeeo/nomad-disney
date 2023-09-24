import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Characters from '../pages/Characters'
import CharacterDetail from '../pages/CharacterDetail'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Characters />,
      },
      {
        path: '/character/:id',
        element: <CharacterDetail />,
      },
    ],
  },
])

export default router

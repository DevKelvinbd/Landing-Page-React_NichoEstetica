import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EsteticaAlice from './Pages/EsteticaAlice/EsteticaAlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EsteticaAlice />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EsteticaAlice from './Pages/EsteticaAlice/EsteticaAlice';
import 'antd/dist/reset.css';


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

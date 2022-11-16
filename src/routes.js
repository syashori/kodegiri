import { useRoutes } from 'react-router-dom';
// layouts
import Layout from './layouts';
//
import Soal1 from './pages/Soal1';

// ----------------------------------------------------------------------

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'soal1', element: <Soal1 /> },
      ],
    },
  ]);
}

export default Router;



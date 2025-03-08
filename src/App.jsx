import '@fortawesome/fontawesome-free/css/all.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, Home, Layout, SearchResult } from '@pages';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/search', element: <SearchResult /> },
      { path: '/error', element: <ErrorPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };
    const unsubscribe = router.subscribe(() => {
      handleScrollToTop();
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

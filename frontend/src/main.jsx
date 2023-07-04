import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
 
// Pages Import
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Contact from './Pages/Contact';
import Item from './Pages/Item';
import Payment from './Pages/Payment';
import Exchange from './Pages/Exchange';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import CheckOut from './Pages/CheckOut';
import CheckoutFinal from './Pages/CheckoutFinal';


// Admin Pages
import AdminAddNew from './Admin Pages/AddNewForm/AddNew';
import AdminStatistic from './Admin Pages/Statistic/AdminStatistic';
import AdminEdit from './Admin Pages/Edit/AdminEdit';
import EditCurrent from './Admin Pages/Edit/EditCurrent';

import Error_page from './Secondary Components/Error_page';
import Error_pageAdmin from './Secondary Components/Error_pageAdmin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error_page />
  },
  {
    path: 'catalog/:id',
    element: <Item />,
    errorElement: <Error_page />
  },
  {
    path: 'catalog',
    element: <Catalog />,
    errorElement: <Error_page />
  },
  {
    path: 'contact',
    element: <Contact />,
    errorElement: <Error_page />
  },
  {
    path: 'payment',
    element: <Payment />,
    errorElement: <Error_page />
  }, 
  {
    path: 'exchange', 
    element: <Exchange />,
    errorElement: <Error_page />
  }, 
  {
    path: 'privacy-policy', 
    element: <PrivacyPolicy />,
    errorElement: <Error_page />

  }, 
  {
    path: 'admin/add-new',
    element: <AdminAddNew />,
    errorElement: <Error_pageAdmin />
  }, 
  {
    path: 'admin/stats',
    element: <AdminStatistic />,
    errorElement: <Error_pageAdmin />
  }, 
  {
    path: 'admin/edit',
    element: <AdminEdit />,
    errorElement: <Error_pageAdmin />
  }, 
  {
    path: 'admin/edit/:id',
    element: <EditCurrent />,
    errorElement: <Error_pageAdmin />
  }, 
  {
    path: 'checkout',
    element: <CheckOut />,
    errorElement: <Error_page />
  },
  {
    path: 'checkout/final',
    element: <CheckoutFinal />,
    errorElement: <Error_page />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

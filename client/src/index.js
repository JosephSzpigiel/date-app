import 'semantic-ui-css/semantic.min.css'
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import HomePage from './components/HomePage/Homepage';
import AddActivity from './components/AddActivity/AddActivity';
import AllDates from './components/AllDates/AllDates';
import CreateDate from './components/CreateDate/CreateDate';
import "./index.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error in app. Whoops!</div>,
    children: [
      {index: true, element: <HomePage/>},
      {path: '/addactivity',
       element: <AddActivity />,
      },
      {
        path: '/dates',
        element: <AllDates />,
      },
      {
        path: '/dates/create',
        element: <CreateDate />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1';
document.head.appendChild(meta);

root.render(<RouterProvider router={router} />);








// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

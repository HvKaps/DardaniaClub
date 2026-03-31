import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Pages
import Home from './pages/Home.jsx'
import DonationPage from './pages/DonationPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import EventsPage from './pages/EventsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/donate", element: <DonationPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "/EventPage", element: <EventsPage /> },
      { path: "/admin/dashboard", element: <AdminDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
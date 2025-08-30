import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'  // Lägg till denna
import UsersPage from "./pages/UsersPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './i18n';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [  // Lägg till children här
            {
                index: true,  // Detta gör att HomePage visas på "/"
                element: <HomePage />
            },
            {
                path: 'login',  // Ändra från '/auth/login' till 'login'
                element: <LoginPage />
            },
            {
                path: 'users',
                element: <UsersPage />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
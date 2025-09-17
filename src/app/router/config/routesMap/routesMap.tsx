import App from '@app/App';
import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';

export const routesMap = [
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
            },
            {
                path: '/about',
                element: <AboutPage/>,
            },
        ],
    },
];
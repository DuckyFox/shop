import App from '@app/App';
import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PageError } from '@widgets/PageError';

export const routesMap = [
    {
        path: '/',
        element: <App/>,
        errorElement: <PageError/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
                errorElement: <PageError/>,
            },
            {
                path: '/about',
                element: <AboutPage/>,
                errorElement: <PageError/>,
            },
            {
                path: '/*',
                element: <NotFoundPage/>,
                errorElement: <PageError/>,
            },
        ],
    },
];
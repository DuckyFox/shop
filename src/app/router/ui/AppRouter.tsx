import { router } from '@app/router/config/router/router';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

const AppRouter = () => {
    return (
        <Suspense fallback={'loading...'}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default AppRouter;
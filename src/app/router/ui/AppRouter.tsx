import { router } from '@app/router/config/router/router';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '@shared/ui';

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default AppRouter;
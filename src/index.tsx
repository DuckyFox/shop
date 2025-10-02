import { createRoot } from 'react-dom/client';
import { AppRouter } from '@app/router';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import '@app/styles/index.scss';

import './i18n';

const root = document.getElementById('root');
const container = createRoot(root);
container.render(
    <ErrorBoundary>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </ErrorBoundary>,
);
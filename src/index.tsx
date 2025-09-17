import { createRoot } from 'react-dom/client';
import { AppRouter } from '@app/router';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';

import './i18n';

const root = document.getElementById('root');
const container = createRoot(root);
container.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
);
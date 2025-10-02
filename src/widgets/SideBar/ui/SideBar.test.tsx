import { act, render, screen } from '@testing-library/react';
import { Sidebar } from '@widgets/SideBar';
import { Provider } from 'react-redux';
import { store } from '@app/store/store.ts';
import { userEvent } from 'storybook/test';

describe('Sidebar', () => {
    test('Should render the Sidebar', () => {
        render(
            <Provider store={store}>
                <Sidebar/>
            </Provider>,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle sideBar', async () => {
        render(
            <Provider store={store}>
                <Sidebar/>
            </Provider>,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('toggle-button');
        await act(() =>  userEvent.click(toggleBtn));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        await act(() =>  userEvent.click(toggleBtn));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});

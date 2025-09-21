import { render, screen } from '@testing-library/react';
import { Button } from '@shared/ui';
import { expect } from 'storybook/test';
import { ButtonTheme } from '@shared/ui/Button/Button.tsx';

describe('Button', () => {
    test('should render correctly', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should render with class `clear`', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});

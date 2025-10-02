import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from '@shared/ui';
import { reduxDecorator } from '@shared/config/storybook';
import { themeDecorator } from '@shared/config/storybook';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        reduxDecorator({ theme: { theme: 'light' }, language: { language: 'ru' } }),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const testButton: Story = {
    decorators: [
        themeDecorator,
        reduxDecorator({ theme: { theme: 'light' }, language: { language: 'ru' } }),
    ],
    args: {
        children: 'click', // строка, не объект
    },
};

export const testButton2: Story = {
    decorators: [
        themeDecorator,
        reduxDecorator({ theme: { theme: 'dark' }, language: { language: 'ru' } }),
    ],
    args: {
        children: 'click', // строка, не объект
    },
};





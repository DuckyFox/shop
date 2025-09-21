import { classNames } from '@shared/lib';

describe('classNames', () => {
    test('classNames with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('classNames with add class', () => {
        expect(classNames('someClass', {}, ['someAddClass'])).toBe(
            'someClass someAddClass',
        );
    });

    test('classNames with a few add classes and options', () => {
        const expected = 'someClass someAddClass1 someAddClass2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'someAddClass1',
                'someAddClass2',
            ]),
        ).toBe(expected);
    });
});

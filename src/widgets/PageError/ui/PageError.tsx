import cls from './PageError.module.scss';
import { classNames } from '@shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {

    const reloadPage = () => {
        location.reload();
    };

    const { t } = useTranslation('PageError');

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage} className={cls.reloadButton}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};


import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('translation\:404 Not Found')}
        </div>
    );
};

export default NotFoundPage;
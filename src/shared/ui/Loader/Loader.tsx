import React from 'react';
import cls from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={cls.page}>
            <div className={cls.loader}>
                <div className={cls.loaderInner}></div>
            </div>
        </div>
    );
};

export default Loader;
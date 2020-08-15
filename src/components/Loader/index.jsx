import React from 'react';

import imgLoader from '../../assets/images/Loader/loader.gif';

const Loader = () => {
    return (
        <>
            <img className="loader" src={imgLoader} alt="Загрузка..."/>
        </>
    )
};

export default Loader;
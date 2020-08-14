const validate = values => {
    let errors = {};

    if (!values.username) {
        errors.username = "Введите логин";
    } else if (!/^[\w.@+-]{6,150}$/.test(values.username)) {
        errors.username = "Некорректный логин. Такого пользователя нет в системе";
    } else if (values.username !== 'test_super') {
        errors.username = "Неверный логин";
    }
    if (!values.password) {
        errors.password = "Введите пароль";
    } else if (values.password.length < 8) {
        errors.password = "Пароль должен содержать не менее 8 символов";
    } else if (values.password !== 'Nf<U4f<rDbtDxAPn') {
        errors.password = "Неверный пароль";
    }
    
    return errors;
};

export default validate;
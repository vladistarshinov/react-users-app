const validate = values => {
    let errors = {};

    if (!values.username) {
        errors.username = "Введите логин";
    } else if (!/^[\w.@+-]{1,150}$/.test(values.username)) {
        errors.username = "Логин невалидный";
    }
    if (!values.password) {
        errors.password = "Введите пароль";
    } else if (values.password.length < 8) {
        errors.password = "Пароль должен содержать не менее 8 символов";
    }
    
    return errors;
};

export default validate;
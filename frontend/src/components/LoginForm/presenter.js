import React from 'react';
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';


const LoginForm = (props, context)  => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form}>
      <input className={formStyles.textInput} type="text" placeholder={context.t('username')} />
      <input className={formStyles.textInput} type="password" placeholder={context.t('password')} />
      <input className={formStyles.button} type="submit" placeholder={context.t('Log in')} />
    </form>
    <span className={formStyles.divider}>{context.t('or')}</span>
    <span className={formStyles.facebookLink}>
      <Ionicon icon='logo-facebook' size='20' color='#385185' />
      {context.t('Log in with Facebook')}
    </span>
    <span className={formStyles.forgotLink}>{context.t('Forgot password?')}</span>
  </div>
);

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default LoginForm;

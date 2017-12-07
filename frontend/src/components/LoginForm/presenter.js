import React from 'react';
import PropTypes from 'prop-types'

import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';


const LoginForm = (props, context)  => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form}
          onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="text"
        placeholder={context.t('username')}
        value={props.nameValue}
        onChange={props.handleInputChange}
        name='username'
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder={context.t('password')}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name='password'

      />
      <input className={formStyles.button} type="submit" placeholder={context.t('Log in')} />
    </form>
    <span className={formStyles.divider}>{context.t('or')}</span>
      <FacebookLogin
        appId="2040045472885046"
        autoLoad={true}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass={formStyles.facebookLink}
        icon="fa-facebook-official"
      />
    <span className={formStyles.forgotLink}>{context.t('Forgot password?')}</span>
  </div>
);
LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
}
LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default LoginForm;

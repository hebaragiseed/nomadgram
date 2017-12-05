import React from 'react';
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';


const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>{context.t('Sign up to see photos and videos from yor friends.')}</h3>
    <button className={formStyles.button}>
      <Ionicon icon='logo-facebook' fontSize='20px' color='white' />
        {context.t('Log in with Facebook')}
    </button>
    <span className={formStyles.divider}>{context.t('or')}</span>
    <form className={formStyles.form}>
      <input className={formStyles.textInput} type="email" placeholder={context.t('Email')} />
      <input className={formStyles.textInput} type="text" placeholder={context.t('Full Name')} />
      <input className={formStyles.textInput} type="username" placeholder={context.t('Username')} />
      <input className={formStyles.textInput} type="password" placeholder={context.t('Password')} />
      <input className={formStyles.textInput} type="submit" placeholder={context.t('Sign up')} />
    </form>
    <p className={formStyles.terms}>
      {context.t('By siging up, you agree to our')}<span>{context.t('Terms & Privacy Policy')}</span>.
    </p>
  </div>
);
SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default SignupForm;

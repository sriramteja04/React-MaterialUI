import React from 'react';

const ForgetPassword = () => {
  state = {
    email: '',
    password: '',
    verificationCode: '',
    checking: '',
    redirect: '',
  };

  const emailChageHandler = e => {
    console.log(e);
  };

  return (
    <div>
      <h3>Forget password Module will run here</h3>
      <div>
        <input
          placeholder={'Email'}
          name={'email'}
          type={'text'}
          onChange={emailChageHandler}
          value={this.state.email}
          className={'emailinput'}
        />
      </div>
    </div>
  );
};

export default ForgetPassword;

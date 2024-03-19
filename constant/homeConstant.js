export const START = {
  title: `Lets help you ${'\n'}pass your exams`,
  body: 'We guide you to answer all past questions know your weakness and improve upon your knowledge',
  btnText: 'Get Started',
};

export const SIGNOPTIONS = {
  btnOne: 'Sign In',
  btnTwo: 'Sign Up',
};

export const SIGNIN = {
  title: 'Sign In',
  btnText: 'Sign In',
  field: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'text',
      placeholder: 'Enter your password',
    },
  ],
};

export const SIGNUP = {
  title: 'Sign Up',
  field: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
    },
    {
      name: 'tel',
      label: 'Telephone',
      type: 'text',
      placeholder: 'Enter your tel',
    },
  ],
  field2: [
    {
      name: 'password',
      label: 'Password',
      type: 'text',
      placeholder: 'Enter your password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'text',
      placeholder: 'Confirm your password',
    },
  ],
  field3: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
    },
  ],
  btnText: ['Next', 'Finish'],
};

export const EDITSIGNINFO = {
  title: 'Edit User',
  field: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
    },
    {
      name: 'tel',
      label: 'Telephone',
      type: 'text',
      placeholder: 'Enter your tel',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      placeholder: 'Enter your country',
    },
  ],
  btnText: 'Edit',
};

export const EDITPASSWORDINFO = {
  title: 'Password',
  field: [
    {
      name: 'oldPassword',
      label: 'Current Password',
      type: 'text',
      placeholder: 'Enter your password',
    },
    {
      name: 'newPassword',
      label: 'New Password',
      type: 'text',
      placeholder: 'Enter your new password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'text',
      placeholder: 'Enter your confirm password',
    },
  ],
  btnText: 'Edit',
};

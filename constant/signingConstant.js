export const ADDSTAFF = {
  title: 'User Details',
  buttonText: 'Submit',
  fieldDetail: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter username',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      placeholder: 'Enter full name',
    },
    {
      name: 'telephone',
      label: 'Telephone',
      type: 'text',
      placeholder: 'Enter tel number',
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      placeholder: 'Enter location',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm password',
    },
    {
      name: 'position',
      label: 'Position',
      type: 'select',
      options: ['Administrator', 'Tech Officer', 'Marketer', 'Supervisor'],
    },
  ],
};

export const STAFFTABLE = [
  'Personnel Id',
  'Name',
  'Contact',
  'Position',
  'Action',
];

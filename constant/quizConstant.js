export const QUIZOPTIONS = {
  title: 'Quiz Options',
  btnText: 'Generate Quiz',
  field: [
    {
      name: 'quizType',
      label: 'Quiz Type',
      type: 'select',
      options: ['Bece', 'Wassce', 'Novdec', 'Toef', 'Sat'],
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'select',
      options: ['Physics', 'Math', 'Int Science', 'Catering'],
    },
    {
      name: 'year',
      label: 'Year',
      type: 'select',
      options: [
        'May/June 2000',
        'May/June 2001',
        'May/June 2002',
        'May/June 2003',
      ],
    },
    {
      name: 'questionNos',
      label: 'Number of questions',
      type: 'number',
      placeholder: '',
    },
  ],
};

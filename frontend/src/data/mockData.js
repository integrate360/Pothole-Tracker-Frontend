// src/data/mockData.js
export const roads = [
  { id: 1, name: 'Chopasni Housing Board -> Chopasni Housing Board, Jodhpur', length: '1.29', surveyor: 'Nikhil', date: 'Wed, 26 Jun 2024', rating: '43.92', condition: 'Fair' },
  { id: 2, name: 'Jodhpur -> 24, Chopasni Road, Jodhpur', length: '1.5', surveyor: 'Nikhil', date: 'Wed, 26 Jun 2024', rating: '50.92', condition: 'Fair' },
  { id: 3, name: 'Chopasni Housing Board -> Jwala Vihar, Jodhpur', length: '1.65', surveyor: 'Nikhil', date: 'Tue, 02 Jul 2024', rating: '50.18', condition: 'Fair' },
  { id: 4, name: 'Sardarpura -> Pratap Nagar, Jodhpur', length: '0.61', surveyor: 'Nikhil', date: 'Tue, 02 Jul 2024', rating: '57.33', condition: 'Fair' },
];

export const users = [
    { id: 1, name: 'Nikhil Vyas', email: 'shubham@roadvision.ai', joined: 'Jul 9, 2024', tasks: 0, status: 'Idle', role: 'Admin', type: 'Web User'},
    { id: 2, name: 'Tanmoyee Singh', email: 'tanmoyeesingharoy1999@gmail.com', joined: 'Aug 12, 2024', tasks: 0, status: 'Pending', role: 'User', type: 'Web User'},
    { id: 3, name: 'Vinit', email: 'vjha8688@gmail.com', joined: 'Dec 14, 2023', tasks: 0, status: 'Pending', role: 'User', type: 'Mobile User'},
    { id: 4, name: 'Saquib', email: 'saquib@indikaai.com', joined: 'Apr 22, 2024', tasks: 0, status: 'Pending', role: 'User', type: 'Mobile User'},
]

export const tasks = [
    { id: 1, title: 'Please survey the road and upload the video', type: 'Survey', assignedTo: 'Suri', createdOn: '2024-07-18', dueDate: 'Jul 24, 2024', status: 'Closed'},
    { id: 2, title: 'Please complete the survey', type: 'Survey', assignedTo: 'Suri', createdOn: '2024-07-18', dueDate: 'Jul 31, 2024', status: 'Closed'},
    { id: 3, title: 'Provide survey report', type: 'Survey', assignedTo: 'Vinit', createdOn: '2024-07-25', dueDate: 'Jul 26, 2024', status: 'Pending'},
    { id: 4, title: 'Demo', type: 'Survey', assignedTo: 'Vinit', createdOn: '2024-07-31', dueDate: 'Aug 5, 2024', status: 'Pending'},
]
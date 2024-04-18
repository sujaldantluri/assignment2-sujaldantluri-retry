// src/todoItems.js
const todoItems = [
    //add number to current date
    { title: 'Groceries', description: 'Buy meat and eggs', dueDate: new Date(new Date().setDate(new Date().getDate() + 10)) },
    { title: 'Doctor', description: 'General practicioner checkup ', dueDate: new Date(new Date().setDate(new Date().getDate() + 6)) },
    { title: 'Date', description: 'Date with girlfriend', dueDate: new Date(new Date().setDate(new Date().getDate() + 4)) },
    { title: 'Class', description: 'Wine tasting class', dueDate: new Date(new Date().setDate(new Date().getDate() + 2)) },

];

export default todoItems;

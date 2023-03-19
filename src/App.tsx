import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';

const reminderListData: Reminder[] = [
  { id: 1, title: 'Reminder 1' },
  { id: 2, title: 'Reminder 2' },
  { id: 3, title: 'Reminder 3' },
  { id: 4, title: 'Reminder 4' },
  { id: 5, title: 'Reminder 5' }
];

function App() {
  return (
    <div>
      <ReminderList items={reminderListData} />
    </div>
  );
}

export default App;

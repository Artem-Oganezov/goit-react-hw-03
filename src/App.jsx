import { useEffect, useState } from 'react';
import s from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const contactsData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [friends, setFriends] = useState(() => {
    const saveText = JSON.parse(localStorage.getItem('save-text'));
    if (saveText?.length) {
      return saveText;
    }
    return contactsData;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('save-text', JSON.stringify(friends));
  }, [friends]);

  const addFriend = newTask => {
    setFriends(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  const deleteFriend = friendId => {
    setFriends(prevTasks => {
      return prevTasks.filter(friend => friend.id !== friendId);
    });
  };

  const friendItem = friends.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={s.book}>Phonebook</h1>
      <ContactForm addTasks={addFriend} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contact={friendItem} onDelete={deleteFriend} />
    </div>
  );
}

export default App;

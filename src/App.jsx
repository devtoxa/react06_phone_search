
import { useState } from 'react';
import './App.css'
import Insert from './component/Insert'
import List from './component/List'
function App() {

  const [contacts, setContacts] = useState([
    { id: 1, name: '홍길동', phone: 'aaa-abc2-3333' },
    { id: 2, name: '김자바', phone: 'aaa-def3-4444' },
  ]);
  const handleInsert = (newContact) => {
    console.log('onInsert');
    setContacts([...contacts, newContact])
  }
  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id != id))
  }
  const handleEdit = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };
  return (
    <div className="App">
      <Insert contacts={contacts} onInsert={handleInsert} />
      <h2>contact list</h2>
      <List contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}

export default App;

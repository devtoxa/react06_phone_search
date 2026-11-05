
import { useState } from 'react';
import './App.css'
import Insert from './component/Insert'
import List from './component/List'
function App2() {

  const [contacts, setContacts] = useState([
    { id: 1, name: '홍길동', phone: '010-2222-3333' },
    { id: 2, name: '김자바', phone: '010-3333-4444' },
  ]);
  const handleInsert = (newContact) => {
    console.log('onInsert');
    setContacts([...contacts, newContact])
  }
  const handleDelete = (id) => {
    setContacts(contacts.filter(info => info.id != id))
  }
  return (
    <div>
      <h2>전화번호부</h2>
      <Insert contacts={contacts} onInsert={handleInsert} />
      <List contacts={contacts} onDelete={handleDelete} />
    </div>
  )
}

export default App2;

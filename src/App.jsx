
import { useState } from 'react';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: '홍길동', phone: '010-2222-3333' },
    { id: 2, name: '김자바', phone: '010-3333-4444' },
  ]);
  const [form, setForm] = useState({ name: '', phone: '' })
  const handleInputChange = (e) => {
    // console.log(e.target.name + ":" + e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
    // console.log(form);
  }
  const handleAddContact = (e) => {
    e.preventDefault()
    console.log(e.target.phone.value)
    setContacts(
      [
        ...contacts,
        {
          id: contacts.length + 1,
          name: form.name,
          phone: form.phone
        }
      ]
    )
  }
  // 추가
  // 삭제
  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>전화번호부</h2>
      {


      }
      <form onSubmit={handleAddContact} style={{ marginBottom: '15px' }}>
        <input type="text" name="name" placeholder="이름" onChange={handleInputChange} value={form.name}></input>
        <input type="text" name="phone" placeholder="전화번호" onChange={handleInputChange} value={form.phone}></input>
        <button type="submit" style={{ padding: "5px 10px" }}>추가</button>
      </form>
      <ul>
        {
          contacts.map((contact, i) => (
            <li key={i} style={
              {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
                borderBottom: '1px solid #ddd'
              }
            }>
              <span><strong>{contact.name}</strong>&nbsp;</span>
              <span>&nbsp;<strong>{contact.phone}</strong></span>
              <button style={{ backgroundColor: 'red', color: 'white', border: '1px solid white', marginLeft: '5px' }}>삭제</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App

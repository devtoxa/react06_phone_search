import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Insert({ onInsert, contacts }) {
    const [form, setForm] = useState({ name: '', phone: '' })
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) return;
        const newContact = {
            id: contacts.length + 1,
            name: form.name,
            phone: form.phone
        }
        onInsert(newContact)
        setForm({ name: '', phone: '' })
    }
    return (
        <div className="container m-5">
            <Form className="Insert" onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
                <Form.Control type="text" name="name" placeholder="이름" onChange={handleInputChange} value={form.name}></Form.Control>
                <Form.Control type="text" name="phone" placeholder="전화번호" onChange={handleInputChange} value={form.phone}></Form.Control>
                <Button type="submit">추가</Button>
            </Form>
        </div>
    )
}
export default Insert;
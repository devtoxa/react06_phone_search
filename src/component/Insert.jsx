import { useState } from "react";

function Insert({ onInsert, contacts }) {
    const [form, setForm] = useState({ name: '', phone: '' })
    const handleInputChange = (e) => {
        // console.log(e.target.name + ":" + e.target.value)
        setForm({ ...form, [e.target.name]: e.target.value })
        // console.log(form);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) return;
        const newContact = {
            id: contacts.length+1,
            name: form.name,
            phone: form.phone
        }
        onInsert(newContact)
        setForm({ name: '', phone: '' })
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
            <input type="text" name="name" placeholder="이름" onChange={handleInputChange} value={form.name}></input>
            <input type="text" name="phone" placeholder="전화번호" onChange={handleInputChange} value={form.phone}></input>
            <button type="submit" style={{ padding: "5px 10px" }}>추가</button>
        </form>
    )
}
export default Insert;
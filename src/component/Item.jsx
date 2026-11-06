import { useState } from "react"
function Item({ contact, onDelete, onEdit }) {
    const [form, setForm] = useState({ name: contact.name, phone: contact.phone, id: contact.id })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const [edit, setEdit] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        onEdit({
            id: contact.id,
            name: form.name,
            phone: form.phone
        })
        setEdit(false)
    }
    const handleCancel = () => {
        setForm({ name: contact.name, phone: contact.phone, id: contact.id });
        setEdit(false);
    }
    if (edit) {
        return (
            <li className="Item">
                <form>
                    <span>{form.id}</span>
                    <div><input value={form.name} name="name" onChange={handleChange}></input></div>
                    <div><input value={form.phone} name="phone" onChange={handleChange}></input></div>
                    <button onClick={handleCancel}>취소</button>
                    <button onClick={handleSubmit}>수정완료</button>
                </form>
            </li>
        )
    } else {
        return (
            <li className="Item">
                <span>{form.id}</span>
                <div>{contact.name}</div>
                <div>{contact.phone}</div>
                <div className="ButtonContainer">
                    <button onClick={() => { onDelete(contact.id) }}>삭제</button>
                    <button onClick={() => { setEdit(!edit) }}>수정</button>
                </div>
            </li>
        )
    }
}
export default Item;
import Item from './Item';
import { useState } from 'react';
function List({ contacts, onDelete, onEdit }) {
    const [searchText, setSearchText] = useState('')
    const handleInput = (e) => {
        setSearchText(e.target.value)
    }
    contacts = contacts.filter((contact) => (contact.name.includes(searchText)))

    return (
        <div>
            <input type="text" name="searchText" value={searchText} onChange={handleInput} />
            <ul className="List">
                {

                    contacts.map((contact, i) => (
                        <Item key={i} contact={contact} onDelete={onDelete} onEdit={onEdit} />
                    ))
                }
            </ul>
        </div>
    )
}
export default List;
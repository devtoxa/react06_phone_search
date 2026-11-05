import Item from './Item';
function List({ contacts, onDelete }) {
    return (
        <ul>
            {
                contacts.map((contact, i) => (
                    <Item key={i} contact={contact} onDelete={onDelete} />
                ))
            }
        </ul>
    )
}
export default List;
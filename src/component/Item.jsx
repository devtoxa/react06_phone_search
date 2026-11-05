function Item({ contact, onDelete }) {
    return (
        <li style={
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
            <button style={{ backgroundColor: 'red', color: 'white', border: '1px solid white', marginLeft: '5px' }} onClick={() => { onDelete(contact.id) }}>삭제</button>
        </li>
    )
}
export default Item;
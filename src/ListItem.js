import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ListItem(props) {
    const items = props.items;
    const listItem = items.map(item => {
        return <div className="list" key={item.key}>
            <p>  <input type="text"
                id={item.key}
                value={item.text}
                onChange={(e) => { props.setUpdate(e.target.value, item.key) }} />
                <span>
                    <FontAwesomeIcon onClick={() => { props.deleteItem(item.key) }}
                        className='faicon' icon='trash' />
                </span>
            </p>

        </div>
    })
    return (
        <div>{listItem}</div>
    );
}
export default ListItem;
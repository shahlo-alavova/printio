import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes'

const style = {
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
const Second = ({ id, left, top, hideSourceOnDrag, children, }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }
    // eslint-disable-next-line jsx-a11y/aria-role
    return (<div ref={drag} style={{ ...style, left, top }}>
        {children}
    </div>);
};

export default Second;



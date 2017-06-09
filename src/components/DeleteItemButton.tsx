import * as React from 'react'

export const DeleteItemButton = (props) => {
    return (
        <button onClick={(id) => props.onClick(props.itemToDeleteId) }> Delete me ! </button>
    )
}

// export {DeleteItemButton}
// export *
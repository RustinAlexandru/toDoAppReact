import * as React from 'react'

export const AddListButton = (props) => {

    return (
        <button onClick={ () => props.onClick() }> Click me to do a new list! </button>
    )

}


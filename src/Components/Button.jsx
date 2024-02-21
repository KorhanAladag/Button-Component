import React from "react";
import {MdAddShoppingCart} from 'react-icons/md'

export default function Button({variant, title, text, disabled, startIcon, endIcon, size, color, disableShadow, hover}){
    return (
        <>
            <p className={hover ? 'hover' : ''}>{title}</p>
            <button disabled={disabled} className={`button ${variant} ${color} ${disableShadow ? disableShadow : ''} ${size}`}>{startIcon}{text}{endIcon}</button>
        </>
    )
}
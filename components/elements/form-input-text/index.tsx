import React from "react";

export default function FormInputText({placeholder = '', type = 'text'}) {
    return (
        <div className={'form-input-text'}>
            <span className={'form-input-text__label'}>{placeholder}</span>
            <input type={type} className={'form-input-text__input'}/>
        </div>
    )
}

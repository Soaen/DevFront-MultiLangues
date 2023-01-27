import React from 'react'

export default function LangButton({changeLang, img}){

    return (
        <button className='btn-lang' onClick={changeLang}><img src= {`./icons/`+ img + `.svg`}  alt="Français" /></button>
    )
}
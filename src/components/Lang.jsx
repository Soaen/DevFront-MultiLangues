import React, { useState } from 'react'
import './Lang.css'
import langData from './langData'
import LangButton from './LangButton'


export default function Lang()
{
    const [currentLang, setCurrentLang] = useState(langData.some( e => e.id === navigator.language) ? navigator.language : 'en-US');

    const changeLangFR = () => {
      setCurrentLang('fr-FR')
    }
    const changeLangEN = () => {
      setCurrentLang('en-US')
    }
    const changeLangES = () => {
      setCurrentLang('es')
    }

    return (
        <div>
          <div className='btn-container'>
          <LangButton changeLang={changeLangFR} img={"france"} />
          <LangButton changeLang={changeLangEN} img={"uk"}/>
          <LangButton changeLang={changeLangES} img={"spain"}/>
          </div>
          <div className="text-container">
          {langData.map((e) => {
            if(e.id === currentLang){
                return (
                  <div>
                    <h1>{e.title}</h1>
                    <h2>{e.subtitle}</h2>
                  </div>
                        )
            }
            return null
          })}
          </div>
          
        </div>
      )
}

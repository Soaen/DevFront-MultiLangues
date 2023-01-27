import React, { useContext, useState } from 'react'
import './Lang.css'
import langData from './langData'
import LangButton from './LangButton'

export default function Lang() {

    const [currentLang, setCurrentLang] = useState(langData.some(e => 
      e.id === navigator.language) ? navigator.language : 'en-US');

      const MyContext = React.createContext();

    const changeLangFR = () => {
      setCurrentLang('fr-FR')
    }
    const changeLangEN = () => {
      setCurrentLang('en-US')
    }
    const changeLangES = () => {
      setCurrentLang('es')
    }


    const valueTitle = langData


    return (
        <div className='all-container'>
          <div className='btn-container'>
            <LangButton changeLang={changeLangFR} img={"france"} />
            <LangButton changeLang={changeLangEN} img={"uk"}/>
            <LangButton changeLang={changeLangES} img={"spain"}/>
          </div>
          <div className="text-container">

            <MyContext.Provider value={valueTitle}>
              <ChildH1 />
            </MyContext.Provider>




          {/* {langData.map((e) => {
            if(e.id === currentLang){
              return (
                <div>
                  <h1>{e.title}</h1>
                  <h2>{e.subtitle}</h2>
                </div>
              )
            }
            return null
          })} */}
          </div>
        </div>
      )

      function ChildH1(){
        const contextValue = useContext(MyContext)
        var finalTitleValue;
        contextValue.map((e) => {
          if(e.id === currentLang){
            finalTitleValue = (
              <div>
                <h1>{e.title}</h1>
                <h2>{e.subtitle}</h2>
              </div>
            )
          }
          return null;
        })


        return finalTitleValue 

      }
}
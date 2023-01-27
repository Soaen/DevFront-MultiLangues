import React, { useContext, useState } from 'react'
import './Lang.css' 
import langData from './langData' // importe les données de langue 
import LangButton from './LangButton'  // importe le composant de bouton de langue 

export default function Lang() {
    // utilise une fonction useState pour définir la langue actuelle en utilisant le navigateur (si disponible) ou définir par défaut en anglais
    const [currentLang, setCurrentLang] = useState(langData.some(e => 
      e.id === navigator.language) ? navigator.language : 'en-US');

    // crée un context pour partager les données de langue entre les composants
    const MyContext = React.createContext();
    const valueTitle = langData

    // définit des fonctions pour changer la langue en français, anglais et espagnol
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
        <div className='all-container'>
          <div className='btn-container'>
            {/* utilise le composant LangButton pour créer des boutons de changement de langue en passant les fonctions de changement de langue correspondantes */}
            <LangButton changeLang={changeLangFR} img={"france"} />
            <LangButton changeLang={changeLangEN} img={"uk"}/>
            <LangButton changeLang={changeLangES} img={"spain"}/>
          </div>
          <div className="text-container">
            {/* fournit les données de langue via le contexte pour les composants enfants */}
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

      // Composant enfant qui utilise les données de langue fournies par le contexte pour afficher le titre et le sous-titre dans la langue sélectionnée
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
import { useState } from 'react';
import './App.css';
import HeaderPrincipalCastellano from './Componentes/HeaderPrincipalCastellano';
import MainPrincipalCastellano from './Componentes/MainPrincipalCastellano';
import HeaderPrincipalEnglish from './Componentes/HeaderPrincipalEnglish';
import MainPrincipalEnglish from './Componentes/MainPrincipalEnglish';

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(prev => !prev);
  };

  return (
    <div className="App">
      {isEnglish ? 
        <HeaderPrincipalEnglish toggleLanguage={toggleLanguage} /> :
        <HeaderPrincipalCastellano toggleLanguage={toggleLanguage} />
      }

      {isEnglish ? <MainPrincipalEnglish /> : <MainPrincipalCastellano />}
    </div>
  );
}

export default App;
import React, { Fragment } from 'react';
import './App.css';
import Header, {} from './Components/Header'; // diferente do tutorial do marcobruno colabcode, ele me apontou erro de sintaxe pedindo pra digitar as chaves! só assim funcionou o codigo.
import Hashtag from './Components/Hashtag';
import Label from './Objects/Label';

const App = () => (
    <main className='app'>
        <Header />
        <Hashtag />
        <Label content="Mostrar eventos" />
    </main>
  );

export default App;

import React, { Fragment } from 'react';
import Card from './Objects/Card';
import Player from './Objects/Player';
import Header, {} from './Components/Header'; // diferente do tutorial do marcobruno colabcode, ele me apontou erro de sintaxe pedindo pra digitar as chaves! só assim funcionou o codigo.




function App() {
  return (
    <Fragment>
    <Header />
    <Card />
    <Player player="x" />
    </Fragment>
  );
} 

export default App;

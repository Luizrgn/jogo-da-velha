import React, { Fragment } from 'react';

import Header, {} from './Components/Header'; // diferente do tutorial do marcobruno colabcode, ele me apontou erro de sintaxe pedindo pra digitar as chaves! só assim funcionou o codigo.
import Hashtag from './Components/Hashtag';




function App() {
  return (
    <Fragment>
        <Header />
        <Hashtag />
    </Fragment>
  );
} 

export default App;

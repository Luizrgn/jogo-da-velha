import React, {Fragment} from 'react'; // aqui importamos o fragment, melhorando nosso SEO sistemas de busca. 
import Sobre from './Objects/Sobre';
import Logotipo from './Objects/Logotipo';

function App() {
  return (
    <Fragment> // fragment é colocado no lugar da div para não sujar nosso MARKUP que pode ser inspecionado no Search html dentro de inspector.
      <Logotipo />
      <Sobre />
    </Fragment>
  );
} // outra maneira de escrever e trazer isso do Fragment é sem precisar importar ele você digitar <> "algum codigo" </> e o sistema ja vai compreender que é fragment

export default App;

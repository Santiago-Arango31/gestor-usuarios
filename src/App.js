import './App.css';
import { useState } from 'react';

import Card from './components/card.js'
import Container from './components/container.js'
import Formulario from './components/formulario.js'

function App() {
  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios([...usuarios, usuario])
  }
  // console.log(usuarios)
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: '20' }}>
            <Formulario submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x => <li key={x.email}>{`${x.name} ${x.lastname} : ${x.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;

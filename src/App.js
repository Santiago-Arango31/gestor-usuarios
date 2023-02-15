import './App.css';

import useFormulario from './hooks/useFormulario.js'
import Input from './components/input.js'
import Card from './components/card.js'
import Container from './components/container.js'
import Button from './components/button.js'
import { useState } from 'react';


function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({ name: '', lastname: '', email: '' })
  // console.log('formulario', formulario)
  const submit = (e) => {
    e.preventDefault()
    setUsuarios([...usuarios, formulario])
    reset()
  }
  // console.log(usuarios)
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div  style={{ padding: '20' }}>
            <form onSubmit={submit}>
              <Input name='name' label={'Nombre'} value={formulario.name} onChange={handleChange} placeholder='Nombre' />
              <Input name='lastname' label={'Apellido'} value={formulario.lastname} onChange={handleChange} placeholder='Apellido' />
              <Input name='email' label={'Correo'} value={formulario.email} onChange={handleChange} placeholder='Correo' />
              <Button>Enviar</Button>
            </form>
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

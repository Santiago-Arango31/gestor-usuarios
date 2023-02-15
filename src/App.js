import './App.css';
import useFormulario from './hooks/useFormulario.js'
import Input from './components/input.js'
import Card from './components/card.js'

function App() {
  const [formulario, handleChange] = useFormulario({name:'', lastname:''})
  console.log('formulario', formulario)
  return (
    <Card>
      <form>
     <Input name='name' label={'Nombre'} value={formulario.name} onChange={handleChange} />
     <Input name='lastname' label={'Apellido'} value={formulario.lastname} onChange={handleChange} />
    </form>
    </Card>
    
  );
}

export default App;

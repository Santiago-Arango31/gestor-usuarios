import Input from './input.js'
import Button from './button.js'
import useFormulario from '../hooks/useFormulario.js'

const Formulario = ({submit}) => {
  const [formulario, handleChange, reset] = useFormulario({ name: '', lastname: '', email: '' })
  // console.log('formulario', formulario)
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formulario)
    reset()
  }

    return (
        <form onSubmit={handleSubmit}>
        <Input name='name' label={'Nombre'} value={formulario.name} onChange={handleChange} placeholder='Nombre' />
        <Input name='lastname' label={'Apellido'} value={formulario.lastname} onChange={handleChange} placeholder='Apellido' />
        <Input name='email' label={'Correo'} value={formulario.email} onChange={handleChange} placeholder='Correo' />
        <Button>Enviar</Button>
      </form>
    )
}

export default Formulario;
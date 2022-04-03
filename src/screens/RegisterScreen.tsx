import { Title } from "../components/Title"
import { RegisterForm } from "../components/ui_register/RegisterForm"
import { useSelector } from 'react-redux';

export const RegisterScreen = () => {
  const {activeEmployee} = useSelector((state: any) => state.employees);
  let message = 'Registrar Empleado';
  if (activeEmployee) {message = 'Actualizar Empleado'}
    
  return (
    <div >
        <Title title={message} />
        <RegisterForm/>
    </div>
  )
}

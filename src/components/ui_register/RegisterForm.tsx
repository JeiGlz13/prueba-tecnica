import {Formik, Form, FormikState,} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import { MyTextInput } from './MyTextInput';
import { MyMaskedInput } from './MyMaskedInput';
import { getBirthDayFromCedula } from '../../helpers';
import { employeeInfoInterface } from '../../interfaces/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmploye } from '../../redux/actions/employeeAction';
import { useNavigate } from 'react-router-dom';
import uuid from 'uuid-random';

export const RegisterForm = () => {
    const {activeEmployee} = useSelector((state: any) => state.employees);
const dispatch = useDispatch();
const navigate = useNavigate();

let initialForm: employeeInfoInterface  = {
    nombres: '',
    apellidos: '',
    email: '',
    cedula: '',
    numeroINSS: '',
}

if (activeEmployee) {initialForm = activeEmployee}



const validationSchema = Yup.object({
    nombres: Yup.string()
                .max(50, 'Debe tener menos de 50 caracteres')
                .required('El nombre es obligatorio'),
    apellidos: Yup.string()
                .max(50, 'Debe tener menos de 50 caracteres')
                .required('El nombre es obligatorio'),
    email: Yup.string()
              .email('Debe ser un email valido')
              .required('El email es obligatorio'),
    cedula: Yup.string()
            .required('La cedula es obligatoria'),
    numeroINSS: Yup.string()
            .required('El numero de INSS es obligatorio')
});

const valuesToSave = (values: employeeInfoInterface) => {
    const birthDay = getBirthDayFromCedula(values.cedula);
    if (typeof birthDay !== 'string') return;
    
    const dataToSave = {
        ...values,
        fechaNacimiento: birthDay
    }
    return dataToSave;
}

const onSubmit = (values: employeeInfoInterface, resetForm: (nextState?: Partial<FormikState<employeeInfoInterface>> | undefined | {[key: string]: string}) => void) =>{
    const {cedula, numeroINSS} = values;
    if ((cedula.includes('_')) || numeroINSS.includes('_')) return Swal.fire('Oops...', 'Rellene los campos correctamente', 'error');
    
    const dataToSave = valuesToSave(values);
    if (!dataToSave) return;
    
    //TODO: Enviar a la API
    if (activeEmployee) {
        dispatch(updateEmploye(dataToSave));
        resetForm({values: ''});
        navigate('/'); 
        return;
    }

    const uid = uuid();
    
    const newEmploye = {
        uid,
        ...values
    }
    dispatch(addEmployee(newEmploye))    
    resetForm({values: ''});
    navigate('/');
}

  return (
    <div className="w-full flex justify-center ">
        <div className=" px-6 sm:px-6 lg:px-8 mb-12 w-11/12 md:w-10/12 lg:w-9/12">
            <Formik 
                initialValues={initialForm}
                onSubmit = {(values, {resetForm})=>onSubmit(values, resetForm)}
                validationSchema={validationSchema}
            >
                {
                    (formik)=>(
                        <Form className="bg-white w-full formShadow rounded-3xl p-8 sm:p-12 mt-8" >
                            <p className="text-2xl font-bold leading-7 text-center">Datos Empleado</p>
                            
                            <div className="md:flex items-start mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <MyTextInput placeholder='Nombres' label='Nombres' name='nombres' />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <MyTextInput placeholder='Apellidos' label='Apellidos' name='apellidos' />
                                </div>
                            </div>

                            <div className="md:flex items-start mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <MyTextInput placeholder='Email' label='Email' name='email' />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <MyMaskedInput mask='999-999999-9999a' placeholder='000-000000-0000X' label='Cédula' name='cedula' />
                                </div>
                            </div>
                            
                            <div className="md:flex items-start mt-12 pr-6">
                                <div className="w-full md:w-1/2 flex flex-col md:mt-0 mt-4">
                                    <MyMaskedInput placeholder='0000000-0' mask='9999999-9' label='No. INSS' name='numeroINSS' />
                                </div>
                            </div>
                        
                    
                            <div className="flex items-center justify-center w-full mt-6">
                                <button type='submit' title='Guardar'
                                className='text-white flex items-center font-semibold bg-verdeSER hover:bg-green-800 transition-all duration-150 py-2 px-8 text-xl rounded-lg' >
                                    <i className="fa-solid fa-floppy-disk mr-3"></i>
                                    {
                                        (activeEmployee)?'Actualizar':'Guardar'
                                    }
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div>
  )
}

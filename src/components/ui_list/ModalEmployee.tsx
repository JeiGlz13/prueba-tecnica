import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, employeeClose, setActiveEmployee } from '../../redux/actions/employeeAction';
import { useNavigate } from 'react-router-dom';
export const ModalEmployee = () => {
    const {activeEmployee} = useSelector((state: any) => state.employees);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {uid, nombres, cedula, apellidos, fechaNacimiento, numeroINSS, email} = activeEmployee;

    const setClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        dispatch(employeeClose())
    }

    const handleDelete = (e: any) => {
        e.preventDefault();
        dispatch(deleteEmployee(uid));
    }

    const handleEdit = (e: any) =>{
        e.preventDefault();
        dispatch(setActiveEmployee(activeEmployee));
        navigate('/editar');
    }

  return (
    <div className='w-screen h-screen fixed z-40 bg-gray-700 bg-opacity-80 top-0 flex justify-center items-center content-center' >
        <div className="h-5/6 w-10/12 md:w-10/12 lg:w-9/12 -translate-y-0 mr-2 sm:mr-4 md:mr-8">
            <div className="bg-green-600 shadow-lg hidden xs:inline-block w-full h-full rounded-3xl absolute bottom-0 transform -rotate-3"></div>
        
            <div className="bg-white transition shadow-xl w-full h-full rounded-3xl absolute flex flex-col items-start px-6 xs:px-10 sm:px-16 md:px-14 py-6 md:py-10">
                <div className=' relative z-50 w-full flex flex-row justify-end items-center mb-0.5 md:mb-2' >
                    <button title='cerrar' className=' w-8 xs:w-8 md:w-12 h-8 xs:h-8 md:h-12 rounded-full border-2 border-solid border-green-800'
                    onClick={(e) =>setClose(e)} >
                        <i className="fa-solid fa-x text-rojoPokemon"></i>
                    </button>
                </div>
            </div>

            <div className='relative p-20'>
                <div className = "flex flex-col">
                    <h1 className='text-gray-800 text-xl font-bold'>Nombre Completo: </h1>
                    <div className='flex flex-row'>
                        <h1 className='text-gray-600 text-lg font-bold mr-2'>{nombres}</h1>
                        <h1 className='text-gray-600 text-lg font-bold'>{apellidos}</h1>
                    </div>
                </div>

                <div className='flex flex-row mt-6'>
                    <div className='flex- flex-col mr-20' >
                        <h1 className='text-gray-800 text-xl font-bold'>Correo Electrónico: </h1>
                        <h1 className='text-gray-600 text-lg font-bold'>{email}</h1>
                    </div>

                    <div className='flex flex-col' >
                        <h1 className='text-gray-800 text-xl font-bold'>Número INSS: </h1>
                        <h1 className='text-gray-800 text-lg font-bold'>{numeroINSS}</h1>
                    </div>
                </div>

                <div className='flex flex-row mt-6'>
                    <div className='flex flex-col mr-20' >
                        <h1 className='text-gray-800 text-xl font-bold'>Fecha de Nacimiento: </h1>
                        <h1 className='text-gray-600 text-lg font-bold'>{fechaNacimiento}</h1>
                    </div>

                    <div className='flex flex-col mr-20' >
                        <h1 className='text-gray-800 text-xl font-bold'>Número de cédula: </h1>
                        <h1 className='text-gray-600 text-lg font-bold'>{cedula}</h1>
                    </div>
                </div>
                
                <div className='w-full flex flex-row justify-between mt-10 px-16' >
                      <button onClick={(e) => handleEdit(e)} 
                      title="Editar" className="bg-blue-500 rounded-full w-16 h-16 mx-1 text-white hover:shadow-lg text-lg">
                        <i className="fa-solid fa-user-pen text-2xl"></i>
                      </button>

                      <button onClick={(e) => handleDelete(e) } 
                      title="Borrar" className="bg-red-500 rounded-full w-16 h-16 mx-1 text-white hover:shadow-lg text-lg">
                        <i className="fa-solid fa-trash-can text-2xl"></i>
                      </button>
                </div>
                
            </div>
        </div>

    </div>
  )
}

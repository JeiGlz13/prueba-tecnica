import { employeeInfoInterface } from "../../interfaces/interfaces"
import { useDispatch } from 'react-redux';
import { startDeletingEmployee, employeeOpen, setActiveEmployee } from '../../redux/actions/employeeAction';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export const GridItems = ({
    id,
    nombres,
    apellidos,
    email,
    cedula,
    numeroINSS,
    fechaNacimiento,
}: employeeInfoInterface) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (e: any) => {
        e.preventDefault();
        Swal.fire({
          title: '¿Desea borrar el empleado?',
          text: "¡No podrá deshacer esta acción!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Borrar',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.value) {
              dispatch(startDeletingEmployee(id!));
          }
      });
    }

    const handleUpdate = (e:any)=>{
        e.preventDefault();
        const activeEmployee = {id, nombres, apellidos, email, cedula, numeroINSS, fechaNacimiento}
        dispatch(setActiveEmployee(activeEmployee));
        navigate('/editar');
    }

    const handleView = (e:any) => {
        e.preventDefault();
        const activeEmployee = {id, nombres, apellidos, email, cedula, numeroINSS, fechaNacimiento}
        dispatch(employeeOpen(activeEmployee))
    }

  return (
    <tbody>
                <tr className="bg-gray-100 text-center border-b text-md text-gray-600">
                  
                  <td className="p-2">{nombres}</td>
                  <td className="p-2">{apellidos}</td>
                  <td className="p-2">{email}</td>
                  <td className="p-2">{cedula}</td>
                  <td>
                      <button onClick={(e) => handleView(e) }  
                      title="Ver" className="bg-green-600 rounded-md w-10 h-10 mx-1 text-white hover:shadow-lg text-lg">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button onClick={(e) => handleUpdate(e)}
                      title="Editar" className="bg-blue-500 rounded-md w-10 h-10 mx-1 text-white hover:shadow-lg text-lg">
                        <i className="fa-solid fa-user-pen"></i>
                      </button>
                    <button onClick={(e) => handleDelete(e) } 
                      title="Borrar" className="bg-red-500 rounded-md w-10 h-10 mx-1 text-white hover:shadow-lg text-lg">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                  </td>
              </tr>
            </tbody>
  )
}

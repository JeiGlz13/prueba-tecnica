import { Link } from "react-router-dom";
import { EmployeesGrid } from "./EmployeesGrid";
import { NoEmployeesIMG } from "./NoEmployeesIMG";
import { useSelector, useDispatch } from 'react-redux';
import { ModalEmployee } from "./ModalEmployee";
import { useEffect } from 'react';
import { employeeClear } from '../../redux/actions/employeeAction';

export const EmployeesList = () => {
  const { employees, modal, activeEmployee } = useSelector((state: any) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeeClear());
  }, [])
  
  return (
    <div className="flex flex-col w-full justify-center items-center mt-10">
      {
        (employees.length === 0)?(<NoEmployeesIMG/>):(<EmployeesGrid/>)
      }

        <Link to='/nuevo' className="border-2  border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white  flex flex-row my-8">
            <h2 className="text-lg" >Agregar </h2>
            <i className="fa-solid fa-user-plus ml-3 text-xl"></i>
        </Link>

        {
          (modal&&activeEmployee)&&<ModalEmployee/>
        }
    </div>
  )
}

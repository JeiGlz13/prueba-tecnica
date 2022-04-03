import { employeeInfoInterface } from "../../interfaces/interfaces";
import { GridHeader } from "./GridHeader";
import { GridItems } from "./GridItems";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';



export const EmployeesGrid = () => {

  const {employees} = useSelector((state: any) => state.employees);

  const [search, setSearch] = useState(employees);
  const [value, setValue] = useState('');

  useEffect(() => {
    setSearch(employees)
  }, [employees]);

  const handleClick = (e: any) =>{
    e.preventDefault();
    const searchedEmployees = employees.filter((employee: employeeInfoInterface) => (employee.cedula === value));
    setSearch(searchedEmployees);
    setValue('');
  }

  const seeAllEmployees = (e: any) =>{
    e.preventDefault();
    setSearch(employees);
    setValue('');
  }
  
  return (
    <div className="w-11/12 mx-10 flex flex-col" >
      <div className='w-full flex flex-row justify-start items-center flex-wrap mt-4'>
    
          <div className="flex flex-col w-10/12" >
            <h1 className = 'font-semibold mb-2 text-xl ' >
                Buscar por cédula
            </h1>
            <form onSubmit={(e)=>handleClick(e)}
            className="mb-4 flex flex-row items-center text-gray-800 text-base xs:text-lg w-9/12 xs:w-8/12 sm:w-7/12 md:w-6/12 lg:w-7/12 ">
              
              <InputMask 
              className='leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200'
              mask='999-999999-9999a'
              value={value}
              onChange = {(e) => setValue(e.target.value)}
              placeholder = 'Buscar'
              >
            </InputMask>
              
              <input type='submit' value='Buscar' className=" cursor-pointer ml-6 px-4 py-2 rounded-lg bg-green-600 text-white" />
            
              <button type="button" onClick={(e)=>seeAllEmployees(e)}
                className = 'ml-6 px-4 py-2 bg-blue-500 text-white rounded-lg' >
                Ver todos
              </button>
            </form>
          </div>
        </div>

  
         <div className="table w-full p-2">
        <table className="w-full border">
            <GridHeader/>
            {
                search?.map((employee: employeeInfoInterface, index: number)=>(
                  <GridItems key={index} {...employee}  />
                ))
            }
        </table>
        </div>
    </div>
  )
}

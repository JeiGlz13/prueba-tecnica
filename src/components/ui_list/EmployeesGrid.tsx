import { employeeInfoInterface } from "../../interfaces/interfaces";
import { GridHeader } from "./GridHeader";
import { GridItems } from "./GridItems";
import { useSelector } from 'react-redux';



export const EmployeesGrid = () => {

  const {employees} = useSelector((state: any) => state.employees);
  return (
    <div className="w-11/12 mx-10 flex flex-col" >
         <div className="table w-full p-2">
        <table className="w-full border">
            <GridHeader/>
            {
                employees?.map((employee: employeeInfoInterface, index: number)=>(
                  <GridItems key={index} {...employee}  />
                ))
            }
        </table>
        </div>
    </div>
  )
}

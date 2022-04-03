import { Title } from "../components/Title"
import { EmployeesList } from "../components/ui_list/EmployeesList"

export const EmployeesScreen = () => {
  return (
    <div>
      <Title title="Lista de empleados" />
      <EmployeesList/>
    </div>
  )
}

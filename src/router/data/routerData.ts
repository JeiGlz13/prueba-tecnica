import { EmployeesScreen, RegisterScreen } from "../../screens";

type JSXComponent = () => JSX.Element;

interface RouterData {
    id: number,
    to: string,
    label: string,
    Component: JSXComponent ,
}

export const routerData: RouterData[] = [
    {
        id: 1,
        to: '/',
        label: 'Empleados',
        Component: EmployeesScreen,
    },
    {
        id: 2,
        to: '/nuevo',
        label: 'Registrar',
        Component: RegisterScreen,
    },
    
]
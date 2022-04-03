import { EmployeesScreen, RegisterScreen } from "../../screens";
import { ApiScreen } from '../../screens/ApiScreen';

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
    {
        id: 3,
        to: '/api',
        label: 'API',
        Component: ApiScreen,
    },
    
]
import { employeeInfoInterface } from '../../interfaces/interfaces';

 export type employeeActions = 
    | { type: 'employee add', payload: {employee: employeeInfoInterface} }
    | { type: 'employee update', payload:  employeeInfoInterface }
    | { type: 'employee delete', payload: string }
    | { type: 'employee open', payload: employeeInfoInterface }
    | { type: 'employee close' }
    | { type: 'set active employee', payload: employeeInfoInterface }
    | { type: 'employee clear' }

export const addEmployee = (employee: employeeInfoInterface) => ({
    type: 'employee add',
    payload: {
        employee
    }
})

export const updateEmploye = (employee: employeeInfoInterface) => ({
    type: 'employee update',
payload: employee
})

export const deleteEmployee = (cedula: string) => ({
    type: 'employee delete',
    payload: cedula
});

export const setActiveEmployee = (employee: employeeInfoInterface) => ({
    type: 'set active employee',
    payload: employee
})

export const employeeOpen = (employee: employeeInfoInterface) => ({
    type: 'employee open',
    payload: employee
});
export const employeeClose = () => ({type: 'employee close'});
export const employeeClear = () => ({type: 'employee clear'});
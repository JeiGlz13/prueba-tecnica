import { employeeInfoInterface } from '../../interfaces/interfaces';
import { employeeActions } from '../types/types';

export const addEmployee = (employee: employeeInfoInterface): employeeActions => ({
    type: 'employee add',
    payload: {
        employee
    }
})

export const updateEmploye = (employee: employeeInfoInterface): employeeActions => ({
    type: 'employee update',
    payload: employee
})

export const deleteEmployee = (uid: string): employeeActions => ({
    type: 'employee delete',
    payload: uid
});

export const setActiveEmployee = (employee: employeeInfoInterface): employeeActions => ({
    type: 'set active employee',
    payload: employee
})

export const employeeOpen = (employee: employeeInfoInterface): employeeActions => ({
    type: 'employee open',
    payload: employee
});
export const employeeClose = (): employeeActions => ({type: 'employee close'});
export const employeeClear = (): employeeActions => ({type: 'employee clear'});
import Swal from 'sweetalert2';
import { fetchBackend } from '../../helpers/fetchBackend';
import { employeeInfoInterface } from '../../interfaces/interfaces';
import { employeeActions } from '../types/types';

export const employeeStartAddNew = (employee: employeeInfoInterface )=>{
    return async (dispatch: any) =>{
        try {
            const resp = await fetchBackend('employees/create', employee, 'POST');
            const body = await resp.json();

            console.log(body)
            if(body.ok){
                console.log(body)
                employee.id = body.employee.id;
                dispatch(addEmployee(employee));
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const addEmployee = (employee: employeeInfoInterface): employeeActions => ({
    type: 'employee add',
    payload: {
        employee
    }
})

export const startUpdatingEmployee = (employee: employeeInfoInterface) =>{
    return async (dispatch: any) =>{
        try {
            const resp = await fetchBackend(`employees/${employee.id}`, employee, 'PUT');
            const body = await resp.json();

            if(body.ok){
                dispatch(updateEmploye(employee));
            }else{
                Swal.fire('Error', body.message, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const updateEmploye = (employee: employeeInfoInterface): employeeActions => ({
    type: 'employee update',
    payload: employee
})

export const startDeletingEmployee = (uid: string) =>{
    return async (dispatch: any) =>{
        try {
            const resp = await fetchBackend(`employees/${uid}`, {}, 'DELETE');
            const body = await resp.json();

            if(body.ok){
                dispatch(deleteEmployee(uid));
            }else{
                Swal.fire('Error', body.message, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const deleteEmployee = (uid: string): employeeActions => ({
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

export const employeeStartLoading = () =>{
    return async (dispatch: any) =>{
        try {
            const resp = await fetchBackend('employees/', null);
            const body = await resp.json();
            const employees = body.employees;

            dispatch(employeesLoad(employees));
        } catch (error) {
            console.log(error)
        }
    } 
}

const employeesLoad = (employees: employeeInfoInterface[]): employeeActions => ({type: 'employees load', payload: employees});
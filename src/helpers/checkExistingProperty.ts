import { employeeInfoInterface } from '../interfaces/interfaces';

const checkExistingLoop = (myArray: employeeInfoInterface[] | [], property: string, propertyToCheck: string) =>{
    let exist = false;
    if (Array.isArray(myArray) && myArray.length > 0) {
        myArray.forEach((employee: any) => {
            if (employee[propertyToCheck] === property) {
                exist = true;
            }
        });
        return exist
    } 
    return exist;
}

export const checkExistingProperty = (property: string, propertyToCheck: string,  employees: employeeInfoInterface[] | []) => {
    const exist = checkExistingLoop(employees, property, propertyToCheck);
    return exist;
}

export const checkExistingPropertyUpdating = (id: string, property: string, propertyToCheck: string,  employees: employeeInfoInterface[] | []) => {
    const myNewArray = employees.filter((employee: any) => employee.id !== id);
    const exist = checkExistingLoop(myNewArray, property, propertyToCheck);
    return exist
}
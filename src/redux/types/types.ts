import { employeeInfoInterface } from "../../interfaces/interfaces";

export type employeeActions = 
    | { type: 'employee add', payload: {employee: employeeInfoInterface} }
    | { type: 'employee update', payload:  employeeInfoInterface }
    | { type: 'employee delete', payload: string }
    | { type: 'employee open', payload: employeeInfoInterface }
    | { type: 'employee close' }
    | { type: 'set active employee', payload: employeeInfoInterface }
    | { type: 'employee clear' }
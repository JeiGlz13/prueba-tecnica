import { employeeInfoInterface } from "../../interfaces/interfaces";
import { employeeActions } from "../types/types";

const initialState = {
    employees: [],
    activeEmployee: null,
    modal: false
};

export const employeeReducer =  (state = initialState, action:employeeActions) => {
  switch (action.type) {

  case 'employee add':
    return { ...state,
            employees: [...state.employees, 
            action.payload.employee ] }

    case 'employee update':
        return { ...state,
                employees: state.employees.map((employee: employeeInfoInterface) => employee.uid === action.payload.uid ? action.payload : employee) ,
                activeEmployee: null
            }

    case 'employee delete':
        return { ...state,
            employees: state.employees.filter((employee: employeeInfoInterface) => employee.uid !== action.payload), 
            activeEmployee: null,
            modal:false
        }

    case 'employee open':
        return { ...state,
            modal: true,
            activeEmployee: action.payload
        }

    case 'employee close':
        return { ...state,
            modal: false,
            activeEmployee: null
        }

    case 'set active employee':
        return { ...state,
            activeEmployee: action.payload,
            modal: false
        }

    case 'employee clear':
        return { ...state,
        activeEmployee: null,
        modal: false
    }

  default:
    return state
  }
}

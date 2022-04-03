import { employeeActions } from "../actions/employeeAction";

const initialState = {
    employees: [
        {
            uid: '12345678',
            nombres: "Juan",
            apellidos: "Perez",
            email: "juanperez@gmail.com",
            cedula: "001-101203-1000M",
            numeroINSS: "0123456-7",
            fechaNacimiento: "01/01/2000",
          }
    ],
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
                employees: state.employees.map(employee => employee.uid === action.payload.uid ? action.payload : employee) ,
                activeEmployee: null
            }

    case 'employee delete':
        return { ...state,
            employees: state.employees.filter(employee => employee.uid !== action.payload), 
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

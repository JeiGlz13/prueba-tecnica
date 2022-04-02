import { useField, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';

interface PropsInputInterface {
    label?: string;
    name: string;
    mask: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}

export const MyMaskedInput = ({label, mask, ...props}: PropsInputInterface) => {
   const [field] = useField(props);
  return (
    <>
        <label  className="font-semibold leading-none text-lg">{label}</label>

        <InputMask 
          className='leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
          mask={mask}
          placeholder = {props.placeholder}
          {...field}
          {...props} >
        </InputMask>

        <ErrorMessage name={props.name} component = "span" className='text-red-500 text-sm' />
    </>
  )
}
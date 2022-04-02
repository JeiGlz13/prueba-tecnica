import { useField, ErrorMessage } from 'formik';

interface PropsInputInterface {
    label?: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}

export const MyTextInput = ({label, ...props}: PropsInputInterface) => {
   const [field] = useField(props);
  return (
    <>
        <label  className="font-semibold leading-none text-lg">{label}</label>
        <input className='leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200'
        placeholder={props.placeholder}
        {...field} {...props} />
        <ErrorMessage name={props.name} component = "span" className='text-red-500 text-sm' />
    </>
  )
}
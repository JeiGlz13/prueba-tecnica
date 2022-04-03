import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { employeeClear } from '../redux/actions/employeeAction';
import { fetchAPI } from '../helpers/fetchAPI';
import { Items } from '../interfaces/apiInterfaces';
import { Title } from '../components/Title';
export const ApiScreen = () => {
    const dispatch = useDispatch();
    const [apiInfo, setApiInfo] = useState<Items[]>();

    useEffect(() => {
      dispatch(employeeClear());
    }, [dispatch])

    useEffect(() => {
        fetchAPI('https://datos.gob.es/apidata/nti/territory/Province?_sort=label&_pageSize=10&_page=')
        .then(res => {setApiInfo(res.result.items)})
        .catch(err => {return Promise.reject(err)})
    }, [])
    
   const albaceteInfo = apiInfo?.filter(item => item.label === 'Albacete');
    
  return (
    <div className='flex flex-col justify-center items-center w-full' >
        <Title title='API Info'/>
        <span className='mt-6 text-md px-10'>
            <pre>
                {
                    (albaceteInfo)&&
                    JSON.stringify(albaceteInfo[0], null, 2)
                }
            </pre>
        </span>
    </div>
  )
}

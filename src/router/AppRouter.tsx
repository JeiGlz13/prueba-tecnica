import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { RegisterScreen } from '../screens';
import { routerData } from './data/routerData';
import { Navbar } from './Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { employeeStartLoading } from '../redux/actions/employeeAction';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeeStartLoading())
  }, [dispatch])
  

  return (
      <BrowserRouter>
              <Navbar/>
              <div className='mt-24' >
                <Routes>
                    {
                        routerData.map(({Component, to, id}) => (
                            <Route key={id} path = {to} element = {<Component/>} />
                        ))
                    }

                    <Route path = '/editar' element = {<RegisterScreen/>} />
                        
                    <Route path='/*' element = {<Navigate to= {routerData[0].to} replace />}  />
                </Routes>
              </div>
      </BrowserRouter>
  )
}
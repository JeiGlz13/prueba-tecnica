import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { RegisterScreen } from '../screens';
import { routerData } from './data/routerData';
import { Navbar } from './Navbar';

export const AppRouter = () => {
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
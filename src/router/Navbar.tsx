import { Link } from 'react-router-dom';
import LogoSER from '../assets/LogoSER.png';
import { routerData } from './data/routerData';
import { NavbarLinks } from './NavLinks';

export const Navbar = () => {
  return (
    <nav className= {`fixed z-30 top-0 flex flex-row flex-wrap justify-between items-center 
  w-full font-Poppins font-bold text-base md:text-lg lg:text-xl shadow-md bg-white `} >
      <Link className='flex mx-1 xs:mx-3 sm:mx-5 lg:mx-8 py-2 w-5/12 xs:w-4/12 sm:w-3/12'
        to = '/' >
        <img alt='Inicio' src={LogoSER} 
        className = 'w-36 xs:w-32 md:w-32 transition-all duration-200 ' />
      </Link>

      <div className='max-w-10/12 hidden sm:flex flex-row justify-end items-end px-2 lg:px-16 '>
        <div className=' flex justify-between flex-wrap px-8 md:px-12 lg:px-16 ' >
            {
              routerData.map(({label, to, id}) => (
                <NavbarLinks title={label} link={to} key={id} />
              ))
            }
        </div>

      </div>


  </nav>
  )
}

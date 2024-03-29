import { Link } from 'react-router-dom';

interface NavbarLinkProps {
    title: string,
    link: string
}

export const NavbarLinks = ({title, link}: NavbarLinkProps) => {
  return <Link className='flex text-green-900 hover:scale-110 hover:drop-shadow-md transition-all duration-300 mx-7'
            to = {link} >
            {title}
        </Link>;
};

import { Link } from 'react-router-dom';

interface NavbarLinkProps {
    title: string,
    link: string
}

export const NavbarLinks = ({title, link}: NavbarLinkProps) => {
  return <Link className='flex hover:scale-110 hover:drop-shadow-md transition-all duration-300'
            to = {link} >
            {title}
        </Link>;
};

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from '../../AuthProvider/AuthProvider';

function NavList() {
  const {user,signout} = useContext(AuthContext)
  // console.log(user)
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <NavLink to='/' className="flex items-center hover:text-blue-500 transition-colors"> 
            Home
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <NavLink to='/login' className="flex items-center hover:text-blue-500 transition-colors"> 
            Login
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <NavLink to='/register' className="flex items-center hover:text-blue-500 transition-colors"> 
            Register
            </NavLink>
        </Typography>
       <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            <NavLink to='/about' className="flex items-center hover:text-blue-500 transition-colors"> 
            About
            </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <button>
            {
              user && user.email
            }
          </button>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium flex items-center hover:text-blue-500 transition-colors"
        >
            <button onClick={()=>signout()} className='btn btn-primary'>SignOut</button>
        </Typography>
      </ul>
    );
  }

const NavBar = () => {

    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
   
    return (
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Auth Relation
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    );
};

export default NavBar;
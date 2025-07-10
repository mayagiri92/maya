import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
 Menu,
  MenuHandler,
  MenuList,
  MenuItem,

} from "@material-tailwind/react";
import { NavLink } from "react-router";
import logo from './images/logo.jpeg'
import nflag from'./images/nflag.jpeg'
 
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="flex gap-12 size-20xl ml-96">
       <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Home">Home</NavLink>
      </Typography>
      <Menu>
        <MenuHandler>
          <Typography as="li" className="p-1 font-bold text-xl text-white cursor-pointer">
            Program
          </Typography>
        </MenuHandler>
        <MenuList className="z-[1000]">
          <MenuItem><NavLink to="/Program/Animal"> Diploma in Animal Science</NavLink></MenuItem>
          <MenuItem><NavLink to="/Program/Plant"> Diploma in Plant Science</NavLink></MenuItem>
          <MenuItem><NavLink to="/Program/Dit">Diploma in Information Technology</NavLink></MenuItem>
        </MenuList>
      </Menu>
      <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
       <NavLink to = "/staffdetail"> Staff Detail</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Admissionform">Admission Form</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
      <NavLink to = "/Notice">Notice</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Syllabus">Syllabus</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
        color="white"
       className="p-1 font-bold text-xl"
      >
       <NavLink to = "/aboutus">About Us</NavLink>
      </Typography>
    </ul>
  );
 
  return (
    <div>
      <div className="flex ">
    <div>
       <img src = {logo} alt="" className="h-36 w-36 mt-8  ml-48"/>
    </div>
    <div className="text-center mt-4 ml-40 font-bold"> 
      <h1 className="  text-red-600 "> 'सिप हुन्छ हातमा, रोजगारि साथमा'</h1>
    <h2 className='  text-light-blue-400'>प्राविधिक शिक्षा तथा व्यवसायिक तालिम परिषद्</h2>
    <h1 className=" text-light-blue-400 text-4xl m-1" > रोल्पा बहुप्राविधिक शिक्षालय</h1>
    <h2 className=" text-light-blue-400">रोल्पा न.पा.१- मेवाङ्, रोल्पा</h2>
     </div>
     <div>
      <img src={nflag} alt="" className="h-36 w-36 ml-36 mt-6"/>
     </div>
     </div>
     <div className="font-bold text-center bg-red-50 text-black mt-4 py-1">ROLPA POLYTECHNIC INSTITUTE ROLPA RURAL MUNICIPALITY-1 </div>
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-blue-900 mt-6 ">
        
          
        
            <div className="mr-4 hidden lg:block">{navList}</div>
           
          
       
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
          </div>
        </MobileNav>
      </Navbar>
    </div>
   </div>
  );
}
export default Header
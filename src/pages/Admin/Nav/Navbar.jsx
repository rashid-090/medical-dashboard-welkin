import React,{useState,useEffect,useRef} from 'react';
import {NavLink} from 'react-router-dom'
import {BsPersonCircle} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiLogOutCircle} from 'react-icons/bi';
import {Profile} from '../../../assets'

function Navbar() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
      <>
      <nav className='fixed top-0 right-0 w-full h-14 bg-white border  border-b-gray-300 z-40' ref={menuRef}>
        <img src={Profile} onClick={()=>{setOpen(!open)}} className='h-10 w-10 absolute right-10 top-2 border-2 border-gray-500 rounded-full cursor-pointer'/>
            <div className={`dropdown-menu shadow-xl shadow-gary-500 rounded-radiusmd ${open? 'active' : 'inactive'}`} >
              <span className='flex items-center gap-2'>
                <img className='h-10' src={Profile} alt="pro" />
                <div className='flex flex-col'>
                  <h3 className='font-medium text-gray-600'>Dantis Mathew</h3>
                  <p className='text-gray-600 text-xs'>dantise@gmail.com</p>
                </div>
              </span>
              <ul className='pt-4'>
                <DropdownItem icon = {<CgProfile/>} text = {"Profile"} url = {'/admin/appointments'}/>
                <DropdownItem icon = {<BiLogOutCircle/>}  text = {"Logout"} url ={'/admin/specialities'}/>
              </ul>
            </div>
      </nav>
      </>
  )
}

function DropdownItem(props){
  return(
    <li className = 'flex items-center justify-start gap-[5px] m-2 ml-0 z-50 '>
       <span className='text-gray-500 pt-1'>{props.icon}</span>
      <NavLink to={props.url} className='cursor-pointer text-gray-600 font-medium hover:text-black text-sm'>{props.text} </NavLink>
    </li>
  );
}


export default Navbar
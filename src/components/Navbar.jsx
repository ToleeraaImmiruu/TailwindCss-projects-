import { useState } from "react";
import Logo from "../assets/images1.png"; 
import { HiMenu, HiX } from "react-icons/hi";



function Navbar() {

const [IsMenuActive, SetisMenuActive] = useState(false);
const [ActiveLink, SetActiveLink] = useState("#home");



  const navLink = [
    {href:"#home",label:"Home"},
    {href:"#about",label:"About"},
    {href:"#services",label:"Our Services"},
    {href:"#testimonial",label:"Testimonial"},
    {href:"#contact",label:"Contact Us"},
  ]
  return (

    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b gray-100 shadow-100  shadow-sm'>
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:8px md:h-25  h-35">
      {/*logo section*/}  
          <div className=" "> <img className="w-15 h-15 rounded-full hover:opacity-50 md:w-16 md:h-16  "  src={Logo} alt="logo" /></div>
          
        {/* mobile menu hamburger*/}
        <button onClick={()=>SetisMenuActive(!IsMenuActive)} className=" md:hidden p-2 ">
        {IsMenuActive ? <HiX className=" w-15 h-20 md:size-10"/> : <HiMenu className="w-15 h-20 md:size-10"/>}
        </button>
        
          {/* for desktop */}
          <div className="hidden md:flex items-center gap-10 ">
            {
            navLink.map( (link, index) => (<a key={index} href={link.href}
            onClick={()=>SetActiveLink(link.href)}
            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all  ${ActiveLink===link.href? 'text-blue-600 after:w-full':'text-grey-600 hove:text-gray-900'}`}
            >{link.label}</a>))
            }
          </div>
        <div className="hidden sm:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm
        font-medium transition-all hover:shadow-lg hover:shadow-blue-100 ">
          <a href="#login">Get in touch</a>
        </div>
    
      </div>


      {/* mobile menu items */}
      {
        IsMenuActive && (
      <div className="md:hidden bg-white border-t-2 border-gray-100 py-4 ">
            <div className=" container max-auto px-4  space-y-2">
              {navLink.map((link, index) => (
                <a onClick={() => { SetActiveLink(link.href); SetisMenuActive(false)}}
                className={`block text-lg font-medium py-2 px-4 ${ActiveLink===link.href ?"text-blue-600 " : "text-gray-600 hover:text-gray-900"}`} key={index} href={link.href}>{ link.label}</a>
              )
            )} 
            <div className="text-center w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm
        font-medium transition-all hover:shadow-lg hover:shadow-blue-100 ">
          <a href="#login">Get in touch</a>
        </div>
        </div>
      </div>
        )
      }
    </nav>
  )
}
export default Navbar
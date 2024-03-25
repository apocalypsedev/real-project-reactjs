import React, { useState } from 'react'
import { FiShoppingBag, FiUser } from "react-icons/fi";

import {MdClose} from "react-icons/md"
import {HiMenuAlt3} from "react-icons/hi"
function Navbar() {
    const {dropdown, setDropdown} = useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }
  return (
    <nav className=' w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:relative fixed z-20'>
        <div className=' container mx-auto lg:px-6'>
            <div className=' lg:w-full w-11/12 mx-auto h-full flex justify-between items-center'>
                <div className=' flex flex-col gap-y-4'>
                    <div className=' flex items-center gap-x-2'>
                        <h2 className=' font-semibold text-3xl'>Cobalten</h2>
                    </div>
                </div>
                <ul className=' flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden'>
                    <a  href="#" 
                        className=' leading-normal no-underline to-black font-bold text-lg hover:text-secondary'>
                            Blog
                    </a>
                    <a  href="#" 
                        className=' leading-normal no-underline to-black font-bold text-lg hover:text-secondary'>
                            Shop
                     </a>
                    <a  href="#" 
                        className=' leading-normal no-underline to-black font-bold text-lg hover:text-secondary'>
                            Contact
                    </a>
                    <a  href="#" 
                        className=' leading-normal no-underline to-black font-bold text-lg hover:text-secondary'>
                            Product
                    </a>
                </ul>
                <div className=' flex max-lg:hidden gap-x-4'>
                    <button className=' bg-secondary rounded-[10px] p-2 border-none to-white cursor-pointer hover:bg-white hover:text-secondary'>
                        <FiShoppingBag size={18}/>
                    </button>
                    <button className=' bg-secondary rounded-[10px] p-2 border-none to-white cursor-pointer hover:bg-white hover:text-secondary'>
                        <FiUser size={18}/>
                    </button>
                </div>
                {dropdown ? (
                    <div onClick={showDropdown}
                         className=' lg:hidden text-[22px] cursor-pointer to-black'
                    >
                        <MdClose/>
                    </div>
                ) : (
                    <div onClick={showDropdown}
                         className=' lg:hidden text-[22px] cursor-pointer to-black'
                    >
                        <HiMenuAlt3/>
                    </div>
                )}
            </div>
                {dropdown? (
                    <div onClick={showDropdown}
                         className='lg:hidden w-full h-[100vh] fixed top-24 bg-white ease-in-out duration-100'
                    >
                        <div className=' w-full h-[320px] flex flex-col items-baseline pt-8 gap-4'>
                            <ul className=' text-center p-0 flex flex-col justify-center w-full gap-y-8'>
                                <a 
                                    href="#"
                                    className=' leading-normal no-underline text-black font-bold text-lg hover:text-primary'
                                >Blog</a>
                                <a 
                                    href="#"
                                    className=' leading-normal no-underline text-black font-bold text-lg hover:text-primary'
                                >Shop</a>
                                <a 
                                    href="#"
                                    className=' leading-normal no-underline text-black font-bold text-lg hover:text-primary'
                                >Contact</a>
                                <a 
                                    href="#"
                                    className=' leading-normal no-underline text-black font-bold text-lg hover:text-primary'
                                >Product</a>
                            </ul>
                            <div>
                                <button>
                                    <FiShoppingBag size={18}/>
                                </button>
                                <button>
                                    <FiUser size={18}/>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
        </div>
    </nav>
  )
}

export default Navbar
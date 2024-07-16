const NavbarMenu = [

    {
        id: 1,
        title: "Home",
        link: "#"
    },

    {
        id: 2,
        title: "Categories",
        link: "#"
    },

    {
        id: 3,
        title: "Blog",
        link: "#"
    },

    {
        id: 4,
        title: "About",
        link: "#"
    },

    {
        id: 5,
        title: "Contact",
        link: "#"
    }
]

import {MdMenu} from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'

const Navbar = () => {
  return (
    <>
        <div className='bg-brandDark text-white py-6 font-varela'>
            <nav className='container flex justify-between items-center'>
                {/*_____ Logo section _____*/}
                <div>
                    <a href="#" className='text-xl font-bold uppercase'>
                        Playing / <span className='font-extralight text-white/70'>Market</span>
                    </a>
                </div>
                {/*_____ Menu section _____*/}
                <div className='hidden md:block'>
                    <ul className='flex items-center text-white gap-4'>
                        {
                            NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <UpdateFollower
                                        mouseOptions={{
                                            backgroundColor: "white",
                                            zIndex: 999,
                                            followSpeed: 1.5,
                                            scale: 5,
                                            mixBlendMode: "difference",
                                        }}
                                    >
                                        <a 
                                            href={item.link} 
                                            className='inline-block text-sm py-2 px-3 uppercase'
                                        >
                                          {item.title}
                                        </a>
                                    </UpdateFollower>
                                </li>
                            ))
                        }
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 5,
                                mixBlendMode: "difference",
                            }}
                        >
                            <button className='text-xl ps-16'>
                                <SlEarphones />
                            </button>
                        </UpdateFollower>
                    </ul>
                </div>
                {/*_____ Mobile Hamburger section _____*/}
                <div className='md:hidden'>
                    <MdMenu  className='text-4xl'/>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar

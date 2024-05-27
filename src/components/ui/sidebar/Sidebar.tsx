'use client'
import Link from 'next/link'
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { IoCloseOutline,IoPeopleOutline } from 'react-icons/io5'
export const Slidebar = () => {
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );
  return (
    <div>
      {/* Background black */ }
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />

        )
      }


      {/* Blur */ }
      {
        isSideMenuOpen && (
          <div
            onClick={ closeMenu }
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />

        )
      }

      {/* Sidemenu */ }
      <nav
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-50% h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }>


        <IoCloseOutline
          size={ 50 }
          className="absolute top-5 right-5 cursor-pointer"
          onClick={ () => closeMenu() }
        />

        {/* Menú */ }
        <Link 
        href="/category/nosotros"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        onClick={ () => closeMenu() }
        >
          <IoPeopleOutline 
            size={ 30 } 
            />
          <span className="ml-3 text-xl">Nosotros</span>
          </Link>
          <Link 
        href="/category/nuestros_proyectos"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        onClick={ () => closeMenu() }
        >
          <IoPeopleOutline size={ 30 } />
          <span className="ml-3 text-xl">Proyectos</span>
          </Link>
          <Link 
        href="/category/caracterizacion"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        onClick={ () => closeMenu() }
        >
          <IoPeopleOutline size={ 30 } />
          <span className="ml-3 text-xl">Caracterizacion</span>
          </Link>
        {/* Line Separator */ }
        <div className="w-full h-px bg-gray-200 my-10" />

        <Link 
        href="/category/contactenos"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        onClick={ () => closeMenu() }
        >
          <IoPeopleOutline size={ 30 } />
          <span className="ml-3 text-xl">Contactenos</span>
          </Link>
        </nav>
    </div>
  )
}



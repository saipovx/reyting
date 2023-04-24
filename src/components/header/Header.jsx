
import { useState, useEffect } from 'react'

import { NavLink, Link } from 'react-router-dom'
import h from '../header/header.module.scss'

import svg from '../img/logo.png'

function Header () {

    const [nav, setNav] = useState(false)
  
    const closeSideBar = () => {
        setNav(false)
    }

    const [Header , setNavbar] = useState (false)

    const changeBackground = () => {
        console.log(window.scrollY)

        if (window.scrollY >= 100) {

          setNavbar(true)

        } else {

          setNavbar(false)

        }
      }

      useEffect(() => {

        changeBackground()

        window.addEventListener("scroll", changeBackground)

      })


    return (

        <header className={ Header ? [h.header, h.header_active].join(' ') : [h.header] } >
            <div className={h.container}>
                
        <nav className={h.nav}>


            <Link to='/' className={h.nav__logo}  onClick={closeSideBar} >
                <img src={svg} alt="img" /> 
            </Link>

            <ul className={nav ? [h.nav__ul, h.nav__ul_active].join(' ') : [h.nav__ul] }>

            <p>
                 <NavLink  to='./' className={h.nav__ul__link} onClick={closeSideBar}>
                 О нас 
                 </NavLink>
            </p>

            <p>
                 <NavLink  to='./' className={h.nav__ul__link}  onClick={closeSideBar}>
                 Предложения 
                 </NavLink>
            </p>

            <p>
                 <NavLink  to='./' className={h.nav__ul__link}  onClick={closeSideBar}>
                 Обучение 
                 </NavLink>
            </p>

            <p>
                 <NavLink  to='./' className={h.nav__ul__link}  onClick={closeSideBar}>
                 Новости и статьи 
                 </NavLink>
            </p>

            <p >
                 <NavLink  to='./' className={h.nav__ul__link}  onClick={closeSideBar}>
                 Контакты 
                 </NavLink>
            </p>

            </ul>


            <div className={h.nav__admin}>
                
                <button className={h.nav__admin_button}>
                Обратный звонок
                </button>

                <div className={h.nav__admin_user}>
                    
                </div>

                <div className={h.burger} onClick={() => setNav(!nav)}>
                        {nav ? false : true }
                        <span></span>
                </div>

            </div>


            

          

        </nav>
                
            </div>

        </header>


    )

}

export default Header
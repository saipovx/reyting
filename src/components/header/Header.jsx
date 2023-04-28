import { HashLink } from 'react-router-hash-link';


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

      const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -85; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    } 
      


    return (

        <header className={ Header ? [h.header, h.header_active].join(' ') : [h.header] } >
            <div className={h.container}>
                
        <nav className={h.nav}>


            <Link to='/' className={h.nav__logo}  onClick={closeSideBar} >
                <img src={svg} alt="img" /> 
            </Link>

            <ul className={nav ? [h.nav__ul, h.nav__ul_active].join(' ') : [h.nav__ul] }>

            <p  >
            <HashLink
                 to="/#onas"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                  О нас
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/#info"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Предложения 
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/#kval"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Обучение 
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/#novos"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Новости и статьи 
            </HashLink>       
            </p>

            <p >
                 <HashLink  scroll={el => scrollWithOffset(el)}  to='/#footer' className={h.nav__ul__link}  onClick={closeSideBar}>
                 Контакты 
                 </HashLink>
            </p>

            </ul>


            <div className={h.nav__admin}>
                
                <Link to="tel:+79999999999" className={h.nav__admin_button}>
                Обратный звонок
                </Link>

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
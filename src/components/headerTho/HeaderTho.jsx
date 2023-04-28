import { HashLink } from 'react-router-hash-link';


import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import h from '../header/header.module.scss'

import svg from '../img/logo.png'

function HeaderTho () {

    const [nav, setNav] = useState(false)
  
    const closeSideBar = () => {
        setNav(false)
    }

    const [Header , setNavbar] = useState (false)

    const changeBackground = () => {
        

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
                 to="/rezume/#rezume"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Резюме
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/rezume/#poisk"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Поиск 
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/rezume/#reyting"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Рейтинг 
            </HashLink>
            </p>

            <p>
            <HashLink
                 to="/rezume/#abu"
                 className={h.nav__ul__link} onClick={closeSideBar}
                 scroll={el => scrollWithOffset(el)}
                 >
                    
                    Обучение
            </HashLink>       
            </p>

            <p >
                 <HashLink  scroll={el => scrollWithOffset(el)}  to='/rezume/#port' className={h.nav__ul__link}  onClick={closeSideBar}>
                 Партнеры 
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

export default HeaderTho
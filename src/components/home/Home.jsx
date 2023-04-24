import h from '../header/header.module.scss'
import m from '../home/home.module.scss'

import {Link} from 'react-router-dom'

import Onas from '../onas/Onas'
import Info from '../info/Info'
import Choise from '../choise/choise'
import Swiperr from '../swiper/Swiper'
import Kval from '../kval/Kval'


function Home () {

    return (

        <>
        
        <section className={m.section__home}>
            <div className={h.container}>
                
                <div className={m.home}>

                    <p className={m.home__title}>Кадровое агенство</p>
                    <p className={m.home__title}>РЕЙТИНГ</p>

                    <p className={m.home__subtitle}>помощь в поиске работы или сотрудника</p>

                    <div className={m.home__buttons}>
                        
                        <Link to='/' className={m.home__buttons__link}>
                        Соискателям
                        </Link>

                        <Link to='/' className={m.home__buttons__link}>
                        Работодателям
                        </Link>

                    </div>

                </div>

            </div>
        </section>

        <Onas />
        
        <Info />

        <Choise />

        <Swiperr />

        <Kval />

        </>

    )

}

export default Home
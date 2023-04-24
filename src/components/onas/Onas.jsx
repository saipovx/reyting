import o from '../onas/onas.module.scss'
import h from '../header/header.module.scss'

import onas__item from '../img/onas__item.jpg'

import { Link } from 'react-router-dom'

function Onas () {
    return (

        <section className={o.section__onas}>
            <div className={h.container}>

                <p className={o.onas__title}>
                О нас
                </p>
                
                <div className={o.onas}>

                    <img src={onas__item} alt="svg" className={o.onas__img} />
                    
                    <div className={o.onas__item}>
                        
                    <div className={o.onas__item_id}>

                            <div className={o.line}></div>

                            <p className={o.onas__item_id_title}>
                            Рейтинг — организация, оказывающая услуги по поиску и подбору персонала и предоставляющая услуги по поиску работы и трудоустройству.
                            </p>

                    </div>

                    <div className={o.onas__item_id}>

                        <div className={o.line}></div>

                        <p className={o.onas__item_id_title}>

                        Также другие сопутствующие услуги, такие как обучение сотрудников с помощью партнера <Link to='/'><span>“Академия”</span></Link>   

                        </p>

                    </div>

                    </div>

                </div>

            </div>
        </section>

    )
}

export default Onas 
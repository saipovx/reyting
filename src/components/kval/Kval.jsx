
import {Link} from 'react-router-dom'

import h from '../header/header.module.scss'
import k from '../kval/kval.module.scss'

 function Kval () {

    return (


      <section className={k.section__kval}>
        <div className={h.container}>

            <p className={k.kval__title}>
            Повышение квалификации
            </p>
            
            <div className={k.kval}>
                
                <div className={k.kval__item}>
                    <p className={k.kval__item_title}>Повышайте свой профессиональный уровень</p>
                    <Link to='/' className={k.kval__item_link}>Подробнее</Link>
                </div>

                <p className={k.kval__item_subtitle}>Обучайте своих сотрудников</p>


            </div>

        </div>
      </section>


    )
  
}

export default Kval
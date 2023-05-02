import React from 'react';
import {Link} from 'react-router-dom'

import h from '../header/header.module.scss'
import m from '../vakan/vakan.module.scss'


import Poisk from '../poisk/Poisk';
import HeaderThree from '../headerThree/HeaderTho';

import VakanDataCard from './Vakan.data'
import VakanCard from './VakanCard';





function Vakan () {
    return(

        <>

    <HeaderThree />
    
    <div className={m.section__rezume} id='vakan'>
        <div className={h.container}>
            
             <div className={m.rezume}>

                    <p className={m.rezume__title}>Разместите вакансию</p>

                    <p className={m.rezume__subtitle}>И находите сотрудников среди тех, кто хочет у вас работать.</p>

                        
                        <Link to='/' className={m.rezume__link}>
                        Разместить
                        </Link>

            </div> 

            <Link to='/' className={m.rezume__exit}>
            Назад
            </Link>

        </div>
    </div>

    <Poisk />

    <div className={m.section__reyting} id='reyting'>
        <div className={h.container}>
            
            <p className={m.reyting__title}>
            Рейтинг лучших работников
            </p>

            <div className={m.reyting} >

            { VakanDataCard.map( (info, index) => { 
              return <VakanCard {...info} key = {index} />
        } ) }
            
            </div>

        </div>
    </div>

    <div className={m.section__obuch} id='obuch'>
        <div className={h.container}>

            <p className={m.obuch__title}>
            обучите ваших сотрудников
            </p>
            
            <div className={m.obuch}>

                <div className={m.obuch__item}>
                    
                как запретить доступ к страницам реакт если он не авторизован                  <p className={m.obuch__item_text}> <span></span> Повышение квалификации </p>

                    <p className={m.obuch__item_text}>  <span></span> широкий спектр дисциплин </p>

                    <p className={m.obuch__item_text}>  <span></span> ОПЫТНЫЕ  преподаватели </p>

                </div>

                <Link to='/' className={m.obuch__link}>
                Подробнее
                </Link>

            </div>

        </div>
    </div>
        
        </>


    )
}

export default Vakan
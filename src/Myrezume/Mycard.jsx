

import { Link, useLocation } from 'react-router-dom'
import '../Myrezume/Myrezume.scss'

import useModal from "./useModal";
import Modal from './Modal'
import { useState } from 'react';


import deletet from '../components/img/delete.svg'
import izmen from '../components/img/izmen.svg'
import axios from 'axios';

export default function Mycard({onClick, CardId, deletePost, applicants, ...info}) {

    const token = JSON.parse(localStorage.getItem("token"));

    async function favorites(id) {

        setHeart(!heart);

        await axios

          .post(`http://127.0.0.1:8001/api/resume/${info.id}/favorite/`, null, {

            headers: {
              "content-type": "application/json",
              authorization: `Token ${token}`,
            },

          })

          .catch(err => console.error(err))


          await axios.get('http://127.0.0.1:8001/api/resume/?is_favorited=true', {

          headers: {
            "content-type": "application/json",
            authorization: `Token ${token}`,
          }

        })
        
        .catch(err => console.error(err))

      }

      async function favoritesDelete(id) {

        setHeart(!heart);

        await axios

          .delete(`http://127.0.0.1:8001/api/resume/${info.id}/favorite/`, {

            headers: {
              "content-type": "application/json",
              authorization: `Token ${token}`,
            },

          })

          .catch(err => console.error(err))

          await axios.get('http://127.0.0.1:8001/api/resume/?is_favorited=1', {

          headers: {
            "content-type": "application/json",
            authorization: `Token ${token}`,
          }

        })
        
        .catch(err => console.error(err))



      }


    const [isShowingModal, toggleModal] = useModal();

    const location = useLocation ()

    const heartLove = useLocation();

    const [heart, setHeart] = useState(true)

    const [currentId, setCurrentId] = useState('')

    return(

       <>

   <Modal show={isShowingModal} onCloseButtonClick={toggleModal} currentId={currentId} deletePost={deletePost} />


    <div  className="mini__outer"   >
        
        
        <div className="mini__outer_inside">

             
                    {heartLove.pathname === '/poiksrezume' ?

                    <div>

<svg 

id={info.id}

fill={ !heart ? '#ce1616' : '000'}

onClick={ heart  ? (event) => favorites(event.currentTarget.id) : (event) => favoritesDelete(event.currentTarget.id) }

className='svg' width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/></svg>

                    </div>

                     :
                     
                     ''
                    
                }  

{location.pathname === '/myliverezume' ?

<div>

<svg 

id={info.id}

fill={ heart ? '#ce1616' : '000'}

onClick={ !heart  ? (event) => favorites(event.currentTarget.id) : (event) => favoritesDelete(event.currentTarget.id) }

className='svg' width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"/></svg>

</div>

 :
 
 ''

}  

    <Link to={`/rezumeuser/${info.id}`} onClick={applicants} className="mini__outer_inside_blueTitle">
        {info.postWork}
    </Link>

    <img className="mini__outer_inside_avatar" src={info.foto} alt="" />


    <div className="mini__outer_inside_near">


        <div className="mini__outer_inside__near_age">

            <p className="mini__outer_inside_near_age_pshka">
                {info.data} лет
            </p>

            <p className="mini__outer_inside_near_age_pshka">
                 Желаемая зарплата <br />
                от {info.startSalary} до {info.endSalary} 
            </p>

            <p className="mini__outer_inside_near_age_pshka2">
                Опыт работы
            </p>

            <p className="mini__outer_inside_near_age_pshka">
                 {info.experience} года
            </p>

            <p className="mini__outer_inside_near_age_pshka2">
                Предыдущее место работы
            </p>

            <p className="mini__outer_inside_near_age_pshka">
                {info.placeWork}
            </p>

        </div>

        <div className="mini__outer_inside_near_spec">

            <p className="mini__outer_inside_near_spec_bold">
                Специализация:
            </p>

            <p className="mini__outer_inside_near_spec_bold">
                {info.postWork}
            </p>

            <p className="mini__outer_inside_near_spec_bold">
                {/* Занятость: {zynytost} */}
            </p>

        </div>
    </div>


        </div>

        {location.pathname === '/poiksrezume' || location.pathname === '/myliverezume' ? 
        
        ''
        
        :

        <div className="mini__outer_botline">

    <div className="mini__outer_botline_eyeDiv">
        {/* <img className="mini__outer_botline_eyeDiv_eye" src={glaz} alt="" /> */}

        <p className="mini__outer_botline_eyeDiv_245">
            {/* {prossmotreno} */}
        </p>

    </div>

    <div className="mini__outer_botline_change">

    <div className="mini__outer_botline_change_pics">

<p className="mini__outer_botline_change_pics_blue">
    Скрыть резюме
</p>

</div>

        <div className="mini__outer_botline_change_pics">

            <img className="mini__outer_botline_change_pics_other" src={izmen} alt="" />

            <Link  to={`/preapload/${info.id}`} className="mini__outer_botline_change_pics_blue">
                Изменить
            </Link>

        </div>

        <div className="mini__outer_botline_change_pics">

            <img className="mini__outer_botline_change_pics_other" src={deletet} alt="" />

            {/* <div onClick={toggleModal} className="mini__outer_botline_change_pics_delete">
                <span id={info.id} onClick={(e) => setCurrentId(e.currentTarget.id)}>Удалить</span>
            </div> */}

            <div id={info.id} onClick={(event) => deletePost(event.currentTarget.id)} className="mini__outer_botline_change_pics_delete">
                Удалить
            </div>

        </div>
    </div>



        </div>
       

        }


    </div>

       </>

    )
}
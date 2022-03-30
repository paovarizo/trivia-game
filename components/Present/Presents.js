import styles from './Present.module.scss'
import React, {useState,useEffect} from 'react';
const Present =()=>{
    const [name, setName] = useState();
    useEffect(()=>{
        setName(localStorage.getItem('name'))
    },[])
    return(
        <>
        <div className={styles.present_container}>
            <p className={styles.explanation_title}>
                Hola <strong>{name}</strong>
            </p>
            <p className={styles.explanation_1}>
                Me agrada informarte que te acabas de ganar el <strong>manejo</strong> de un <strong><span>Ferrari 430 Spider</span></strong>
            </p>
            <div className={styles.elias_gif_container}>
                <img src='/elias.gif' className={styles.elias_gif}/>
            </div>
            <p className={styles.explanation_2}> Todo se llevará a cabo el dia <strong>Sábado 2 de abril del 2022 a las 10 am</strong></p>
            <p className={styles.explanation_2}>Solo debes llevar:</p>
            <ul className={styles.explanation_list}>
                <li>
                    Bloqueador
                </li>
                <li>
                    Ropa comoda
                </li>
                <li>
                    Lentes de sol
                </li>
                <li>
                    ¡Mucha actitud!
                </li>
            </ul>
            <p className={styles.explanation_2}><strong>¡TE MERECES TODO LO INCREIBLE DE ESTE MUNDO! TE AMO</strong></p>
            <p className={styles.paola}>- Paola (brownies) .</p>
        </div>
        </>
    )
}
export default Present;
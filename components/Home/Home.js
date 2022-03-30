import { useRouter } from 'next/router';
import styles from './Home.module.scss'
import React, {useState} from 'react';

const HomePage =()=>{
    const router = useRouter();
    const [name, setName] = useState('');

    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const startTrivia=()=>{
        if(name!==''){
            localStorage.setItem('name',name)
            router.push('/trivia')
        }else{
            alert("Ingresa tu nombre por favor")
        }
    }
    return(
        <>
        <div>
            <p className={styles.title}>birthday</p>
            <div className={styles.img_container}>
                <img src='/home.gif' className={styles.img_icon}/>
            </div>
            <p className={styles.title}>trivia</p>
            <div className={styles.input_container}>
                <input placeholder='Ingresa tu nombre' className={styles.input_name} value={name} onChange={handleChange}/>
            </div>
            <div className={styles.button_container}>
                <button className={styles.button_play} onClick={()=> startTrivia()}>¡JUGAR!</button>
            </div>
        </div>
        </>
    )
}

export default HomePage;
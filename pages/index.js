import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {useState} from "react"
import Image from 'next/image';

import Footer from '../components/Footer';
import {apps} from '../utils/index'
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default function Home() {
  const [lock, setLock] = useState(true)
  const d = new Date();
  const time = d.getHours() + ":" + d.getMinutes() 
  let day = days[d.getDay()];
  let month = months[d.getMonth()];

  const unlock = () =>{
    if(lock){
      setLock(false)
    }
    return;
  }

  return (
    <>
      <Head>
        <title>Club Banana</title>
        <meta name="description" content="next js club banana react clone" />
        <link rel="icon" href="/10.png" />
      </Head>
      <div className={styles.homepage} onClick={()=>unlock()}>
          <div className={lock ? styles.lockscreen : `${styles.lockscreen}  ${styles.visibility}`}> 
              <p className={styles.time}>{time}</p>
              <p className={styles.date}>{`${day}, ${month} ${d.getDate()}`}</p>
              <p className={styles.unlock}>touch to unlock</p>
          </div>
          {
            !lock && <>
            <div className={styles.apps}>
                {
                  apps.map((app, key)=>(
                    <div className={styles.app} key={key}>
                    <a href={app.url} className={styles.app_icon}><Image src={app.image} alt={app.name} key={key} /></a>
                    <p>{app.name}</p>
                    </div>
                  ))
                }
            </div>
            <Footer/>
            </>
          }
      </div>

    </>
  )
}

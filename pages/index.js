import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment';
import {useState} from "react"
import Image from 'next/image';

import Footer from '../components/Footer';
import {apps} from '../utils/index'

export default function Home() {
  const [lock, setLock] = useState(true)
  let time = moment().format("h:mm")
  let date = moment().format("dddd, MMMM D")

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
              <p className={styles.date}>{date}</p>
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

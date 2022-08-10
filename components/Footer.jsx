import styles from "../styles/Footer.module.css";
import Image from "next/image";
import mail from "../public/assets/icons/mail.webp";
import photos from "../public/assets/icons/photos.webp";
import tour from "../public/assets/icons/tour.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.apps}>
          <div className={styles.app}>
            <a className={styles.menu_icon}>
              <Image src={mail} alt="mail" />
            </a>
            <p>Contact</p>
          </div>
          <div className={styles.app}>
            <a className={styles.menu_icon}>
              <Image src={tour} alt="tour-dates" />
            </a>
            <p>Tour</p>
          </div>
          <div className={styles.app}>
            <a className={styles.menu_icon}>
              <Image src={photos} alt="photo" />
            </a>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </>
  );
}

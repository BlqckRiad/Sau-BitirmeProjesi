import React from 'react'
import styles from './Header.module.css'
import { assets } from '../assets/assets'
import DantalCare from '../assets/DentalCare.png';

const Header = () => {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.leftSide}>
                {/* Text and Profile Section */}
                <h1 className={styles.title}>Muayene için Randevunuzu Şimdi Alın</h1>
                <p className={styles.description}>
                Şehirdeki en iyi diş hekimlerinden randevunuzu alın. Güvenilir bir profesyonelle randevu oluşturun ve sağlıklı bir gülüş için ilk adımı atın!
            </p>
            
            <div className={styles.profileSection}>
            <h2 className={styles.profileTitle}>Uzmanlarımız</h2>
            <div className={styles.profiles}>
                <div className={styles.profile}>
                    <img src={assets.group_profiles }></img>
                </div>
            </div>

            </div>
            <button className={styles.bookAppointmentBtn}>Randevu Alın</button>
            </div>
            <div className={styles.rightSide}>
                {/* Image Section */}
                <img src={DantalCare} alt="Dental Care" className={styles.image} />
            </div>
        </div>
    )
}

export default Header
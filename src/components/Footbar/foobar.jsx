import styles from './foobar.module.scss';
import Image from 'next/image';
import { UilGlobe } from '@iconscout/react-unicons'
import { UilDollarSignAlt } from '@iconscout/react-unicons'



function foobar() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
    return (
        <div className={styles.foobar}>
            <div className={styles.foobarTop} onClick={scrollToTop}>
                Back to top
            </div>
            <div className={styles.foobarBottom}>
                <Image
                    src="https://res.cloudinary.com/droheqpxn/image/upload/v1638354575/amazon-prime-logo_bfbrzu.png"
                    width={100}
                    height={45}
                    objectFit='contain'
                />
                <div className={styles.block}>
                    <UilGlobe color="white"/>
                    <h4>English</h4>
                </div>
                <div className={styles.block}>
                    <UilDollarSignAlt color="white"/>
                    <h4>USD Dollar</h4>
                </div>
      
            </div>
        </div>
    )
}

export default foobar

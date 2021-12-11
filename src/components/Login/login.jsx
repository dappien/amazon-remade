
import styles from './login.module.scss';
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react";
function login() {

   
    const { data: session } = useSession()
    return (
        <div className={styles.login}>
            <div className={styles.signin}>
                <h5>Sign in for the best experience</h5>
                <button onClick={signIn}><h4>Sign In Securely</h4> </button>
            </div>
            <div className={styles.imageBlock}>
                <Image
                className={styles.image}
                src="https://res.cloudinary.com/droheqpxn/image/upload/v1638981063/Fuji_D2_45M_en_US_1x._CB418309979__tccuco.jpg"
                width={300}
                height={250}
                />
            </div>
        </div>
    )
}

export default login

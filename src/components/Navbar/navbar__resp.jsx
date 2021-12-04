import React from 'react'
import Input from './input'
import Image from 'next/image';
import styles from './navbar__resp.module.scss'
import { UilUser,UilShoppingCartAlt } from '@iconscout/react-unicons'

function Navbar__resp() {
    
    return (
        <div className={styles.navbar__resp}>
            <div className={styles.top__resp}>
                <Image
                    className={styles.logo__resp} 
                    src="https://res.cloudinary.com/droheqpxn/image/upload/v1638354575/amazon-prime-logo_bfbrzu.png"
                    width={135}
                    height={45}
                    objectFit="contain"
                    loading="eager"
                    alt="image"
                    id={1}
                />
                <div className={styles.logoBlock}>
                    <div className={styles.accountBlock}>
                        <h4>AHMET</h4>
                        <UilUser size="35"/>
                    </div>
                    <UilShoppingCartAlt size="40"/>
                </div>
            </div>
            <Input/>
        </div>
    )
}

export default Navbar__resp

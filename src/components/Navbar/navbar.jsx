import React from 'react'
import styles from './navbar.module.scss'
import Image from 'next/image';
import { UilLocationPoint,UilShoppingCartAlt,UilUser} from '@iconscout/react-unicons'
import useWindowSize from '../../hooks/useWindowSize'
import Input from './input'

function Navbar() {
    const size = useWindowSize();
    return (
        <div className={styles.navbar}>
            <Image
                className={styles.navbar__logo} 
                src="https://res.cloudinary.com/droheqpxn/image/upload/v1638354575/amazon-prime-logo_bfbrzu.png"
                width={150}
                height={55}
                objectFit="contain"
                loading="eager"
            />

            <div className={styles.userAdress}>
                <UilLocationPoint 
                    size={`${size.width}`<1025 ? 40 : 20}
                    size={ 480<`${size.width}`<768 && 30 } 
                    color="white"
                />
                <div>
                    <h5>Alıcı:ahmet</h5>
                    <h4>Mersin 33150</h4>
                </div>
            </div>

            <Input />

            <div className={styles.userAdress}>
                <UilUser
                    size={ `${size.width}` < 1025 ? "40" : "0"} 
                    color="white" 
                />
                <div>
                    <h5>AHMET</h5>
                    <h4>Accounts and Lists</h4>
                </div>
            </div>

            <div className={styles.userAdress}>
                <div>
                    <h5>Returns</h5>
                    <h4>and Orders</h4>
                </div>
            </div>

            <div className={styles.shoppingCart}>
                <UilShoppingCartAlt 
                    size={ (768<`${size.width}`<1025) ? 40 : 40}  
                    color="white" />
                <h6>1</h6>
                <div>
                    <h5>Shopping</h5>
                    <h4>cart</h4>
                </div>
            </div>

        </div>
    )
}

export default Navbar

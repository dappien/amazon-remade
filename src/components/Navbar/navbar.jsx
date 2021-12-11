import * as React from 'react';
import styles from './navbar.module.scss'
import Image from 'next/image';
import { UilLocationPoint,UilShoppingCartAlt,UilUser,UilSignout } from '@iconscout/react-unicons'
import useWindowSize from '../../hooks/useWindowSize'
import Input from './input'
import { useSession, signIn, signOut } from "next-auth/react"
import { useSelector } from 'react-redux';
import { selectItems } from '../../slices/basketSlice';
import Link from 'next/link'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Navbar() {

    const items=useSelector(selectItems);
    const size = useWindowSize();
    const { data: session } = useSession()
    
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+ "" : string;
    }
    
  
    const str = session?.user?.name;
    const chars = str?.split(' ');
    console.log(items);
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <Image
                    className={styles.navbar__logo} 
                    src="https://res.cloudinary.com/droheqpxn/image/upload/v1638354575/amazon-prime-logo_bfbrzu.png"
                    width={150}
                    height={55}
                    objectFit="contain"
                    loading="eager"
                />
            </Link>
            <div className={styles.userAdress}>
                {size.width>1024 && 
                <UilLocationPoint 
                    size={`${size.width}`<1025 ? 40 : 20}
                    size={ 480<`${size.width}`<768 && 30 } 
                    color="white"
                />
                }
                <div>
                    <h5>Deliver to {session && `${chars[0]}` }</h5>
                    <h4>England</h4>
                </div>
            </div>

            <Input />

            <div className={styles.userAdress}>
                <UilUser
                    size={ `${size.width}` < 1025 ? "40" : "0"} 
                    color="white" 
                />
                
                <div  >
                    <h5 >{session ? `${chars[0]}` : "Login"}</h5>
                    <h4 >Accounts and Lists</h4>
                    
                </div>
            </div>
            {!session &&
            <div className={styles.userAdress} onClick={signOut}>
                <div>
                    <h5>Returns</h5>
                    <h4>and Orders</h4>
                </div>
            </div>
             }
            <Link href="/cart">
                <div className={styles.shoppingCart}>
                    <UilShoppingCartAlt 
                        size={ (768<`${size.width}`<1025) ? 40 : 40}  
                        color="white" />
                    <h6>{items?.length}</h6>

                    <div>
                        <h5>Shopping</h5>
                        <h4>cart</h4>
                    </div>
                </div>
            </Link>
           
            {(session && size.width <1025 ) && 
            <div className={styles.shoppingCart}>
                <UilSignout
                    onClick={signOut}  
                    size={ (768<`${size.width}`<1025) ? 40 : 40}  
                    color="white" />
            </div>
            }
            {session &&
             <div className={styles.shoppingCart}>
                <UilSignout
                    onClick={signOut}  
                    size={ (768<`${size.width}`<1025) ? 40 : 40}  
                    color="white" />
             </div>
             }
        </div>
    )
}

export default Navbar

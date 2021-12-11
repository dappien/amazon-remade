import React from 'react'
import Input from './input'
import Image from 'next/image';
import styles from './navbar__resp.module.scss'
import { UilUser,UilShoppingCartAlt,UilSignout } from '@iconscout/react-unicons'
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
import { selectItems } from '../../slices/basketSlice';
import { useSelector } from 'react-redux';

function Navbar__resp() {
    const { data: session } = useSession()
    const items=useSelector(selectItems);
    const str = session?.user?.name;
    const chars = str?.split(' ');
    return (
        <div className={styles.navbar__resp}>
            <div className={styles.top__resp}>
                <Link href="/">
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
                 </Link>
                <div className={styles.logoBlock}>
                    <div className={styles.accountBlock}>
                        <h4 onClick={() => signIn()} >{session ? `${chars[0]}` : "Login"}</h4>
                        <UilUser size="35"/>
                    </div>
                    <Link href="/cart">
                        <UilShoppingCartAlt size="40"/>
                    </Link>
                    <h6>{items?.length}</h6>
                    {session && 
                        <UilSignout onClick={signOut} size="40"/>
                    }
                </div>
            </div>
            <Input/>
        </div>
    )
}

export default Navbar__resp

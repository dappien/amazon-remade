import * as React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import {
  UilLocationPoint,
  UilShoppingCartAlt,
  UilUser,
  UilSignout,
} from "@iconscout/react-unicons";
import useWindowSize from "../../hooks/useWindowSize";
import Input from "./input";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { UilHistory } from "@iconscout/react-unicons";
import Link from "next/link";

function Navbar() {
  const items = useSelector(selectItems);
  const size = useWindowSize();
  const { data: session } = useSession();

  const str = session?.user?.name;
  const chars = str?.split(" ");


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
        <div>
          <h5>Deliver to {session && `${chars[0]}`}</h5>
          <div className={styles.location}>
            {size.width > 1024 && (
              <UilLocationPoint
                size={`${size.width}` < 1025 ? 40 : 20}
                size={480 < `${size.width}` < 768 && 15}
                color="white"
              />
            )}
            <h4>England</h4>
          </div>
        </div>
      </div>

      <Input />
      
      <div className={styles.userAdress} >
        <UilUser size={`${size.width}` < 1025 ? "40" : "0"} color="white" />
        
        <div  >
        {!session ?
          <h5 onClick={signIn} >Login</h5> 
        :
          <h5>{chars[0]}</h5> 
        }
          <h4>Accounts</h4>
        </div>
        
      </div>
    
      <Link href="/orders">
        <div className={styles.userAdress}>
          <UilHistory
            size={`${size.width}` < 1025 ? "40" : "0"}
            color="white"
          />
          <div>
            <h5>Returns</h5>
            <h4>&Orders</h4>
          </div>
        </div>
      </Link>
      <Link href="/cart">
        <div className={styles.shoppingCart}>
          <UilShoppingCartAlt size={40} color="white" />
          <h6>{items?.length}</h6>

          <div>
            <h5>Shopping</h5>
            <h4>cart</h4>
          </div>
        </div>
      </Link>

      {session && (
        <div className={styles.shoppingCart}>
          <UilSignout onClick={signOut} size={40} color="white" />
        </div>
      )}
    </div>
  );
}

export default Navbar;

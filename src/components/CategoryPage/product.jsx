import React from 'react';
import './product.module.scss'
import Image from 'next/image';
import styles from './product.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
function product({category}) {
    console.log(category)
    const size = useWindowSize();
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+ "..." : string;
    }
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <Image 
                    src={category.image}
                    width={`${size.width}`<768 ? 150 : 320}
                    height={`${size.width}`<768 ? 120 : 320}
                    alt="image"
                />
            </div>
           
            <div className={styles.info}>
                {size.width<768 ? 
                <h5>{truncate(`Pacrate 7.1 USB Stereo Gaming Headset with Microphone Noise Cancelling Surround Sound USB Headphones with LED Lights for PC Laptop Mac Wired Over-Ear Headset for Kids Adults(Black Green)`,60)} </h5>
                : 
                <h5>{category.title}</h5>
                }
                <div className={styles.stars}>
                    <h4>⭐⭐⭐⭐⭐</h4>
                    <h6>21,155</h6>
                </div>
                <div className={styles.price}>
                    <h6>$</h6>
                    <h4>{category.price}</h4>
                </div>
                <div className={styles.coupon}>
                    <h5>Save 5%</h5>
                    <h4>with coupon</h4>
                </div>
                <h4 className={styles.ships}>Ships to Turkey</h4>
            </div>
         
           
        </div>
    )
}

export default product

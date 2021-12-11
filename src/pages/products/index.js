import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Navbar__resp from '../../components/Navbar/navbar__resp'
import CategoriesBar from '../../components/CategoriesBar/categories'
import UseWindowSize from "../../hooks/useWindowSize";
import Product from '../../components/ProductPage/SingleProduct';
import styles from './products.module.scss';
import Sidebar from '../../components//ProductPage/Sidebar';

function index() {
    const size = UseWindowSize({params});
    
    return (
        <div>
            {size.width > 768 ? <Navbar /> : <Navbar__resp />}
            < CategoriesBar/>
            <div className={styles.body}>
                <div className={styles.imageBlock}>
                    <Product />
                </div>
                <div className={styles.information}>
                    <h4 className={styles.headline}>Edimax EW-7811UTC AC600 Dual-Band USB Adapter, Mini Size Easy to Carry, Supports Both 11AC ( 5GHz Band ) and 11n ( 2.4GHz Band ) Wi-Fi Connectivity, Upgrades your PC / Laptop for Exceeding Streaming and Faster Download</h4>
                    <div className={styles.ratings}> 
                        <h5>⭐⭐⭐⭐⭐</h5>
                        <h4> 824 ratings | 101 Answered questions</h4>
                    </div>
                    <div className={styles.price}>
                        <h5>Price:</h5>
                        <h4>$20.98</h4>
                        <h6>+$11.40 shipping</h6>
                    </div>
                    <div className={styles.category}>
                        <h4>Category</h4>
                        <h5>Man's Wear</h5>
                    </div>
                    <div className={styles.description}>
                        <h4>About this item</h4>
                        <h5>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h5> 
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
               
            </div>
        </div>
    )
}

export default index



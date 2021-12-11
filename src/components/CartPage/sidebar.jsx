import styles from './sidebar.module.scss'
import Image from 'next/image'
function sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.block}>
                <div className={styles.image}>
                    <Image 
                        src="https://res.cloudinary.com/droheqpxn/image/upload/v1639192989/61-sC3ZcNtL._AC_UL100_SR100_100__b9tqyh.jpg"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h1>Nordgreen</h1>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <h3>$189.00</h3>
                    <h4>See all buying options</h4>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.image}>
                    <Image 
                        src="https://res.cloudinary.com/droheqpxn/image/upload/v1639009462/71SGndnCOdL._AC_UL100_SR100_100__z6ljjj.jpg"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h1>Nordgreen</h1>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <h3>$189.00</h3>
                    <h4>See all buying options</h4>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.image}>
                    <Image 
                        src="https://res.cloudinary.com/droheqpxn/image/upload/v1639193005/91gVMokTooL._AC_UL100_SR100_100__uu8gzv.jpg"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h1>Nordgreen</h1>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <h3>$189.00</h3>
                    <h4>See all buying options</h4>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.image}>
                    <Image 
                        src="https://res.cloudinary.com/droheqpxn/image/upload/v1639193022/61AEZd4wk_2BL._AC_UL100_SR100_100__n2rnbw.jpg"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <h1>Nordgreen</h1>
                    <h2>⭐⭐⭐⭐⭐</h2>
                    <h3>$189.00</h3>
                    <h4>See all buying options</h4>
                </div>
            </div>

            
        </div>
    )
}

export default sidebar


import { useSession, signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux'
import { selectTotal } from '../../slices/basketSlice';
import styles from './checkout.module.scss'

function checkout() {
    const { data: session } = useSession()
    const dispatch = useDispatch();
    const total = useSelector(selectTotal);
    return (
        <div className={styles.checkout}>
            <div className={styles.price}>
                <h2>Subtotal(2 items):</h2>
                <h3>$ {total}</h3>
            </div>
            <div>
                <input type="checkbox" />
                <label for="vehicle1"> This order contains a gift</label>
            </div>
            {!session ? 
            <button onClick={signIn}>Proceed to checkout</button>
            : 
            <button>Proceed to checkout</button>
            }
        </div>
    )
}

export default checkout

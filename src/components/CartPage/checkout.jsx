
import { useSession, signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../../slices/basketSlice';
import styles from './checkout.module.scss'
import {loadStripe} from "@stripe/stripe-js";
import axios from 'axios';
import NumberFormat from 'react-number-format';

const stripePromise = loadStripe(process.env.stripe_public_key);
function checkout() {
    const { data: session } = useSession()
    const dispatch = useDispatch();
    const items=useSelector(selectItems);
    const total = useSelector(selectTotal);
    const createCheckoutSession =  async () => {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post('/api/create-checkout-session',
        {
            items:items,
            email:session.user.email
        });

        const result = await stripe.redirectToCheckout({
            sessionId :checkoutSession.data.id
        })

        if (result.error){
            alert(result.error.message);
        }
    };
    return (
        <div className={styles.checkout}>
            <div className={styles.price}>
                <h2>Subtotal(2 items):</h2>
                <h3>
                    <NumberFormat
                        value={total}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                    />
                </h3>
            </div>
            <div>
                <input type="checkbox" />
                <label for="vehicle1"> This order contains a gift</label>
            </div>
            
            {!session ? 
            <button onClick={signIn}>Proceed to checkout</button>
            : 
            <button 
                role="link"
                onClick={createCheckoutSession}
                >Proceed to checkout</button>
            }
        </div>
    )
}

export default checkout

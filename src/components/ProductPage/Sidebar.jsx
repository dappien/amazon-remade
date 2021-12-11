import { useDispatch } from 'react-redux'
import styles from './Sidebar.module.scss'
import { addToBasket } from "../../slices/basketSlice"

function Sidebar({products}) {
    const dispatch=useDispatch();
    const {id,title,price,description,category,image}=products;
    
  const addItem= () =>{
    const product = {
        id,
        title,
        price,
        description,
        category,
        image,
    };
    dispatch(addToBasket(product))
  }
    return (
        <div className={styles.Sidebar} >
            <h4 className={styles.price}>
            $ {products?.price}
            </h4>
            <h4 className={styles.detail}>
                $18.38 Shipping & Import Fees Deposit to Turkey Details 
            </h4>
            <h4 className={styles.adress}>
                Deliver to Turkey
            </h4>
            <h4 className={styles.stock}>
                Only 9 left in stock order soon.
            </h4>
            <select name="Qty" className={styles.option} >
                <option value="1">Qty:1</option>
                <option value="2">Qty:2</option>
                <option value="3">Qty:3</option>
                <option value="4">Qty:4</option>
                <option value="5">Qty:5</option>
                <option value="6">Qty:6</option>
                <option value="7">Qty:7</option>
                <option value="8">Qty:8</option>
                <option value="9">Qty:9</option>
            </select>
            <button className={styles.cartButton} onClick={addItem}>Add to Cart</button>
            <button className={styles.buyButton} >Buy Now</button>
            <h4 className={styles.secure}>Secure transaction</h4>
            <div className={styles.transportion}>
                <h4>Ships from</h4>
                <h5>Amazon.com</h5>
            </div>
            <div className={styles.transportion}>
                <h4>Sold by</h4>
                <h5>Amazon.com</h5>
            </div>
            <div className={styles.policy}>
                <h4>Return Policy:</h4>
                <h5>Refund or replacement available</h5>
            </div>
            <div className={styles.policy}>
                <h4>Return Policy:</h4>
                <h5>Refund or replacement available</h5>
            </div>
            <label className="checkbox">
                <input type="checkbox" />
                <span className="checkmark">Add a gift receipt for easy returns</span>
            </label>
            <button className={styles.addButton} >Add to List</button>
           
        </div>
    )
}

export default Sidebar



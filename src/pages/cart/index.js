import Categories from "../../components/CategoriesBar/categories";
import Navbar from "../../components/Navbar/navbar"
import Navbar__resp from "../../components/Navbar/navbar__resp";
import useWindowSize from "../../hooks/useWindowSize";
import Product from '../../components/CartPage/product';
import styles from './cart.module.scss';
import Checkout from '../../components/CartPage/checkout'
import Sidebar from "../../components/CartPage/sidebar";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";

function index() {
    const size = useWindowSize();
    const items=useSelector(selectItems)
    const total = useSelector(selectTotal)
    return (
        <div>
            {size.width > 768 ? <Navbar /> : <Navbar__resp />}
            <Categories/>
            <div className={styles.main}>
                <div className={styles.block}>
                    <div className={styles.headline}>
                        <h5>Shopping Cart</h5>
                        <h4>Deselect All Items</h4>
                    </div>
                    {items?.map((item,i)=>(
                        <Product 
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category} 
                            image={item.image}   
                        />
                    ))}
                    
                    <div className={styles.price}>
                        <div>
                            <h5>Subtotal (2 items):</h5>
                            <h4>$ {total}</h4>
                        </div>
                    </div>
                    {size.width < 768 && 
                    <Checkout />
                    }
                </div>
                <div className={styles.sidebar}>
                    {size.width >768 && 
                     <Checkout /> 
                    }
                    <Sidebar />
                </div>
            </div>
      
        </div>
    )
}

export default index

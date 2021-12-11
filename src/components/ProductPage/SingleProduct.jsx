
import Image from "next/image"
import useWindowSize from "../../hooks/useWindowSize";
import styles from './SingleProduct.module.scss'
function SingleProduct({products}) {
    const size = useWindowSize();
    return (
        <div>
            {products?.image && 
            <Image
                className={styles.singleProduct}
                width={(`${size.width}`<1025 ? 400 : 800 ) } 
                height={(`${size.width}`<1025 ? 350 :700 ) } 
                src={products?.image}
            />
        }
        </div>
    )
}

export default SingleProduct

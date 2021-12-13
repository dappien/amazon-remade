import styles from "./order.module.scss";
import moment from "moment";
import Image from "next/image";
import Currency from "./Currency";
import NumberFormat from "react-number-format";
function Order({ id, amount, amountShipping, items, timestamp, images }) {
    

    let groupedImages;

  if (images.every((image) => !image.startsWith("["))) {
    groupedImages = Object.values(
      groupBy(images.map((image) => path.basename(image)))
    ).map((group) => [group.length, group[0]]);
  } else {
    groupedImages = [...images.map((image) => JSON.parse(image))];
  }
    console.log(items)


    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+ "" : string;
    }
    
  return (
    <div className={styles.order}>
      <div className={styles.infoBlock}>
        <div className={styles.info}>
            <h2>ORDER # </h2>
            <h3> {truncate(`${id}`,30)}</h3>
        </div>
        <div className={styles.details}>
            <div>
                <h2>ORDER PLACED</h2>
                <h3>{moment.unix(timestamp).format("DD MMM YYYY")}</h3>   
            </div>
            <div>
                <h2>TOTAL</h2>
                <NumberFormat
                    value={amount}
                    className="foo"
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                />  
            </div>
            <div>
                <h6>{items.length} items</h6>   
            </div>
        </div>
      </div>
      <div className={styles.block} >
        {groupedImages.map((group) => (
          <div key={group[1]} className={styles.imageBlock}>
            <Image
              src={`https://fakestoreapi.com/img/${group[1]}`}
              width={200}
              height={200}
            />
           
          </div>
          
        ))}
        {items.length>3 && 
        <div className={styles.more}>
            <h2>+{items.length-3}</h2>
        </div>
        }
      </div>
    </div>
  );
}

export default Order;

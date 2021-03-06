import { getSession, useSession, signIn } from "next-auth/react";
import Categories from "../../components/CategoriesBar/categories";
import Navbar from "../../components/Navbar/navbar";
import Navbar__resp from "../../components/Navbar/navbar__resp";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./orders.module.scss";
import moment from "moment";
import Order from "../../components/OrdersPage/Order";
import { db } from "../../../firebase";
import Head from "next/head";

function Orders({ orders }) {
  const size = useWindowSize();
  const { data: session } = useSession();
  console.log(size.width);
  return (
    <div>
      <Head>
        <title>Amazon Remade by Allego</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {size.width > 768 ? <Navbar /> : <Navbar__resp />}
      <Categories />
      <div className={styles.block}>
        <h1>Your Orders</h1>
        {!session && (
          <h5>
            Please <u onClick={signIn}>sign in</u> to see your orders.{" "}
          </h5>
        )}
        {orders?.length === 0 && session && (
          <h5>You haven't placed an order yet. </h5>
        )}
        <div className={styles.orderBlock}>
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}

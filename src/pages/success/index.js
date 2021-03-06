import { useSession } from "next-auth/react";
import Categories from "../../components/CategoriesBar/categories";
import Navbar from "../../components/Navbar/navbar";
import Navbar__resp from "../../components/Navbar/navbar__resp";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./success.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
function index() {
  const size = useWindowSize();
  const router = useRouter();
  const { data: session } = useSession();
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
        <div className={styles.infoBlock}>
          <h5>Hello {session?.user?.name},</h5>
          <h4>
            Thank you for shopping with us. We'll send a confirmation when your
            items ship.
          </h4>
        </div>

        <div className={styles.detailBlock}>
          <h5>Details</h5>
          <div className={styles.orderBlock}>
            <h3>Order</h3>
            <h6>#111-0200668-5996214</h6>
          </div>
        </div>

        <div className={styles.manageBlock}>
          <div className={styles.manageBlockLeft}>
            <div>
              <h2>Arriving</h2>
              <h3>Friday,June 5</h3>
            </div>
            <button onClick={() => router.push("/orders")} type="">
              View Orders
            </button>
          </div>
          <div>
            <h2>Ship to:</h2>
            <h4>Mulligan</h4>
            <h6>Total Before Tax : $59.98</h6>
            <h5>Estimated Tax : $59.98</h5>
            <h1>Order Total : $59.98</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

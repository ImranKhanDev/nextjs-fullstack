import Button from "@/components/Button/button";
import styles from "./page.module.css";
import Image from "next/image";
const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.catTitle}>test</h1>
          <p className={styles.desc}></p>
          <Button url="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
            <Image
            src='https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600'
            className={styles.img}
            fill={true}
            alt="portfolio"
            >

            </Image>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.catTitle}>test</h1>
          <p className={styles.desc}></p>
          <Button url="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
            <Image
            src='https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600'
            className={styles.img}
            fill={true}
            alt="portfolio"
            >

            </Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.catTitle}>test</h1>
          <p className={styles.desc}></p>
          <Button url="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
            <Image
            src='https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600'
            className={styles.img}
            fill={true}
            alt="portfolio"
            >

            </Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
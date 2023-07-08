import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/blogId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="TEST IMAGE"
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TEST</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>

      <Link href="/blog/blogId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="TEST IMAGE"
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TEST</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>
      <Link href="/blog/blogId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="TEST IMAGE"
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TEST</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

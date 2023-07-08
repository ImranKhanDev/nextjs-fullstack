import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  cache:"no-store"},
  )
  
  if (!res.ok) {
  
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async() => {
const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {
        data.map((item)=>(
          <Link href="/blog/blogId" className={styles.container} key={item.id}>
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
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{data.body}</p>
        </div>
      </Link>
        ))
      }

     
         </div>
  );
};

export default Blog;

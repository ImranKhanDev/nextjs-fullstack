
import Image from "next/image";
import styles from"./page.module.css";

const BlogPost = () => {
    return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>
           Lorem ipsum dolor sit.

        </h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis animi molestiae tenetur expedita cumque itaque rerum illum numquam consectetur non, in delectus?
        </p>
        <div className={styles.author}>
          <Image
            
            src='https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt="adf"
          
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Micheal John Doe</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
           src='https://images.pexels.com/photos/2127731/pexels-photo-2127731.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, non?
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, sapiente eaque, provident aperiam quisquam quos assumenda consequuntur aspernatur delectus atque numquam iure esse doloremque quae ab impedit dignissimos omnis, vel neque est quas! Perspiciatis numquam eos quasi sint natus omnis. <br />
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, sapiente eaque, provident aperiam quisquam quos assumenda consequuntur aspernatur delectus atque numquam iure esse doloremque quae ab impedit dignissimos omnis, vel neque est quas! Perspiciatis numquam eos quasi sint natus omnis. <br />
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae saepe modi corporis repellendus. Tempore dolorum voluptates hic velit repudiandae ea voluptatibus corrupti necessitatibus itaque adipisci veritatis tenetur quis eligendi, modi eos, dicta natus quod? Laborum cum nam magni, quasi adipisci laudantium magnam dolores, ipsam natus veniam rerum praesentium.
      </p>
    </div>
  </div>
);
};

export default BlogPost;
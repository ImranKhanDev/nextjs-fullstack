import Image from "next/image";
import styles from "./about.module.css"
import Button from "@/components/Button/button";
const About = () => {
    return (
        <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src='https://images.pexels.com/photos/1181344/pexels-photo-1181344.jpeg?auto=compress&cs=tinysrgb&w=400' alt="group meeting" 
      fill={true}
      className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
      </div>
        </div>     

      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1  className={styles.title}>Who we are ?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit, ipsam incidunt, facilis veniam minus iste voluptate, 
        <br />
        Dolores odit quae nostrum laboriosam! Dolor facere tenetur culpa illum error id explicabo. Voluptate hic quo excepturi debitis tempora sunt. Rem, minima. Repudiandae.

        </p>
      </div>
      <div className={styles.item}>
      <h1  className={styles.title}>Who we are ?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit, ipsam incidunt, facilis veniam minus iste voluptate,sit amet consectetur adipisicing elit. Distinctio sit,

        <br />
        <br />
       - Dynamic websites
       <br />
       - Fast and handly Mobile responsive
       <br />
       - Mobile Apps
       <br />

        </p>
        <Button url='/contact' text='See our Works'/>
      </div>
      
        </div>      
        </div>
    );
};

export default About;
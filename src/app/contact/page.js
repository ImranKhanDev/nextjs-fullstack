import Image from "next/image";
import styles from "./contact.module.css";
import Button from "@/components/Button/button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact us"
            fill={true}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input
            type="text"
            placeholder="email here"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="Send your message here,we'll get in touch soon.."
          ></textarea>
          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

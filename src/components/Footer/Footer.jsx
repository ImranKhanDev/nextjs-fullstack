import Image from "next/image"
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
<div>@2023 imran. All rights reserved</div>
<div>
  <div className={styles.social}>
 <Image src='/1.png' className={styles.icon} width={15} height={15}  alt='social media'>

 </Image>
 <Image src='/2.png' className={styles.icon} width={15} height={15}  alt='social media'>

 </Image>
 <Image src='/3.png' className={styles.icon} width={15} height={15}  alt='social media'>

 </Image>
 <Image src='/4.png' className={styles.icon} width={15} height={15}  alt='social media'>

 </Image>

  </div>
</div>


    </div>
  )
}

export default Footer
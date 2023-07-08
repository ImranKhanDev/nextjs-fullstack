import Button from "@/components/Button/button";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData=(cat)=>{
const data = items[cat]
if(data){
return data
}
return notFound();
}
const Category = ({ params }) => {
const data=getData(params.category)
console.log(params);
return (
<div className={styles.container}>
  <h1 className={styles.catTitle}>{params.category}</h1>
  {data.map(item=>(
  <div className={styles.item} key={item.id}>
    <div className={styles.content}>
      <h1 className={styles.catTitle}>{item.title}</h1>
      <p className={styles.desc}>{item.desc}</p>
      <Button url="#" text="See more" />
    </div>
    <div className={styles.imgContainer}>
      <Image src={data.img} className={styles.img} fill={true} alt="portfolio">

      </Image>
    </div>
  </div>
  ))}


</div>
);
};

export default Category;
'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css"

const Dashboard = () => {
    const [data,setData]=useState([]);
    const [err,setErr]=useState(false);
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=> {
        async function getData() {
            setIsLoading(true)
            const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
            cache:"no-store"},
            )
            if (!res.ok) {
           
             setErr(true)
            }
           setData(res.json())
            setIsLoading(false)
          }
          getData()
    },[])
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
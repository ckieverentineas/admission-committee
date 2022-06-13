import { useCallback, useEffect, useState } from 'react'
import styles from '/styles/Home.module.css'
export default function Abiturs() {
    const [data, setData] = useState([])
    async function componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('/api/abbitur');
        const datas = await response.json();
        console.log(datas)
        setData(datas)
    }
    useEffect(() => {
        componentDidMount();
    }, []);
    async function Select(id: any) {
        console.log("worked"+id)
    }
    
    return (
        <div>
            <h2 className={styles.title}>Поданные заявления аббитуриентов:</h2>
            <div className={styles.grid}>
            {data.map((key) => (
                <div className={styles.card}>
                    <div>
                        <label>ФИО: {key['firstname']} </label>
                        <label> {key['name']} </label>
                        <label> {key['lastname']} </label><hr/>
                    </div>
                    <div>
                        <label>Желаемая специальность: {key['specialization_first']} </label><br/>
                        <label>Запасная специальность {key['specialization_second']} </label><br/>
                        <label>Общежитие: {key['house']} </label><hr/>
                    </div>
                    
                    <button onClick={() => Select(key)}>Перейти</button>
                </div>
            ))}
            </div>
        </div>
    );
}
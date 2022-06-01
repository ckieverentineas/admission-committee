import { useState } from 'react'
import styles from '../styles/Home.module.css'
export default function Auth() {
    const [lvl, setLvl] = useState('');
    const [gold, setGold] = useState('');
    const [xp, setXp] = useState('');
    async function Get_Account() {
        const res = await fetch('/api/account', {
            body: JSON.stringify({
                token: localStorage['session']
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()
        setLvl(result['lvl'])
        setXp(result['xp'])
        setGold(result['gold'])
        if (Object.keys(result).length > 1444) {
            localStorage.removeItem('session')
            localStorage.setItem('session', `${result['token']}`)
            document.location.href = await "/profile"
        }
        console.log(result)
    }
    return (
        <div className={styles.card}>
            <label> LVL: {lvl}</label> 
            <label> XP: {xp}</label> 
            <label> Gold: {gold}</label>
            <button onClick={Get_Account}>Найти</button>
            
        </div>
    );
}
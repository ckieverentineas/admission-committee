import { useState } from 'react'
import styles from '/styles/Home.module.css'
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
            <h1 className={styles.title}>Создание заявления</h1>

            <label className={styles.label}>Категория документа:</label> 
            <input list="list" name="category" autoComplete="off"/>
            <datalist id='list'>
            <option value='Паспорт'>бумага</option>
            <option value='CY'>бумага</option>
            </datalist>

            <label className={styles.label}>Тип документа:</label> 
            <input list="list" name="category" autoComplete="off"/>
            <datalist id='list'>
            <option value='Паспорт'>паспорт</option>
            <option value='CY'>не паспорт</option>
            </datalist>
            <hr/>
            <label className={styles.label}>Серия:</label> 
            <input type="number" name="category" autoComplete="off"/>

            <label className={styles.label}>Номер:</label> 
            <input type="number" name="category" autoComplete="off"/>
            <hr/>
            <label className={styles.label}>Кем выдан:</label> 
            <input type="text" name="category" autoComplete="off"/>

            <label className={styles.label}>Дата выдачи:</label> 
            <input type="date" name="category" autoComplete="off"/>
            <hr/>
            <label className={styles.label}>СНИЛС:</label> 
            <input type="number" name="category" autoComplete="off"/>

            <label className={styles.label}>ИНН:</label> 
            <input type="number" name="category" autoComplete="off"/>
            <hr/>
            <label className={styles.label}>Фамилия:</label> 
            <input type="text" name="category" autoComplete="off"/>

            <label className={styles.label}>Имя:</label> 
            <input type="text" name="category" autoComplete="off"/>

            <label className={styles.label}>Отчество:</label> 
            <input type="text" name="category" autoComplete="off"/>

            <fieldset>
                <legend>Выберите пол:</legend>
                    <input type="radio" name="drone" value="huey"/>
                    <label>Мужской</label>


                    <input type="radio" name="drone" value="dewey"/>
                    <label>Женский</label>

            </fieldset>
        </div>
    );
}
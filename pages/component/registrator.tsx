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

            <form>
                <ul className={styles.wrapper}>
                    <h2>Паспортные данные:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Гражданство:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Документ, удостоверяющий личность:</label> 
                        <input type="text" list="list" name="category" autoComplete="off"/>
                        <datalist id='list'>
                            <option value='паспорт РФ'>паспорт Российской Федерации</option>
                            <option value='заграничный паспорт'>паспорт для граждан Российской Федерации, выежающих за пределы страны</option>
                            <option value='иностранный паспорт'>паспорт иного государства</option>
                            <option value='военный билет'>удостоверение личности военнослужащего</option>
                            <option value='временное удостоверение'>временное удостоверение граждан Российской Федерации</option>
                            <option value='свидетельство о рождении'>свидетельство о государственной регистрации</option>
                        </datalist>
                    </li>
                    <hr/>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Серия:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                        <label className={styles.label}>Номер:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Кем выдан:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        <label className={styles.label}>Дата выдачи:</label> 
                        <input type="date" name="category" autoComplete="off"/>
                    </li>
                    <hr/>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Фамилия:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        <label className={styles.label}>Имя:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Отчество:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        <label className={styles.label}>Дата рождения:</label> 
                        <input type="date" name="category" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место Рождения:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        <label className={styles.label}>Номер телефона:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>Выберите пол:</legend>
                        <input type="radio" name="gender" value="man"/>
                        <label>Мужской</label>
                        <input type="radio" name="gender" value="woman"/>
                        <label>Женский</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Адрес регистрации места жительства:</label> 
                        <input type="text" name="category" placeholder="индекс, полный адрес постоянной регистрации, район" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Фактический адрес места жительства:</label> 
                        <input type="text" name="category" placeholder="индекс, полный адрес местожительства, район" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>e-mail:</label> 
                        <input type="email" name="category" autoComplete="off"/>
                        <label className={styles.label}>Изучаемый иностранный язык:</label> 
                        <input type="text" name="category" placeholder="Английский" autoComplete="off"/>
                    </li>
                    <hr/>
                    <h2>Выбор специальности:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Специальность:</label> 
                        <input type="text" list="spec" name="category" autoComplete="off"/>
                        <datalist id='spec'>
                            <option value='КС'>Компьютерные системы и комплексы</option>
                            <option value='ИС'>Информационные системы и программирование</option>
                        </datalist>
                        <label className={styles.label}>Запасная специальность:</label> 
                        <input type="text" list="spec" name="category" autoComplete="off"/>
                        <datalist id='spec'>
                            <option value='КС'>Компьютерные системы и комплексы</option>
                            <option value='ИС'>Информационные системы и программирование</option>
                        </datalist>
                    </li>
                    <fieldset>
                        <legend>Форма обучения:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Очная</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Заочная</label>
                    </fieldset>
                    <fieldset>
                        <legend>Место:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>За счет ассингнованных средств краевого бюджета</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Договор с оплатой стоимости обучения</label>
                    </fieldset>
                    <h2>Информация об образовательном учреждении:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Образовательное учреждение:</label> 
                        <input type="text" name="category" placeholder="наименование учебного заведения" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Год окончания:</label> 
                        <input type="number" min="1900" max="2099" name="category" placeholder="2022" autoComplete="off"/>
                        <label className={styles.label}>Полученное образование:</label> 
                        <input type="text" list="educ" name="category" autoComplete="off"/>
                        <datalist id='educ'>
                            <option value='среднее общее'>11 классов</option>
                            <option value='основное общее'>9 классов</option>
                            <option value='среднее профессиональное'>колледж</option>
                            <option value='начальное проффессиональное'>училище</option>
                        </datalist>
                    </li>
                    <fieldset>
                        <legend>Документ, подтверждающий полученное образование:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Аттестат</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Диплом</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Серия:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                        <label className={styles.label}>Номер:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Дата выдачи:</label> 
                        <input type="date" name="category" autoComplete="off"/>
                        <label className={styles.label}>Поданный документ:</label> 
                        <input type="text" list="tipad" name="category" autoComplete="off"/>
                        <datalist id='tipad'>
                            <option value='оригинал'>оригинал документа об образовании</option>
                            <option value='копия'>ксерокопия документа об образовании</option>
                        </datalist>
                    </li>
                    <fieldset>
                        <legend>Медаль:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Да</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Нет</label>
                    </fieldset>
                    <fieldset>
                        <legend>Победы в олимпиадах:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Есть</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Отсутствуют</label>
                    </fieldset>
                    <h2>Информация о работе:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Трудовой стаж, лет:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                        <label className={styles.label}>месяцев:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место работы, занимаемая должность для заочников:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>В общежитии:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Нуждаюсь</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Не нуждаюсь</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <label className={styles.label}>СНИЛС:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                        <label className={styles.label}>ИНН:</label> 
                        <input type="number" name="category" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>Среднее профессиональное получаю:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Впервые</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Не впервые</label>
                    </fieldset>

                    <h2>Сведения о матери:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>ФИО:</label> 
                        <input type="text" name="category" placeholder="Иваненко Виктория Викторовна" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место работы:</label> 
                        <input type="text" name="category" placeholder="Завод Дальдизель" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Должность:</label> 
                        <input type="text" name="category" placeholder="инженер по нефтегазовым установкам" autoComplete="off"/>
                        <label className={styles.label}>Номер телефона:</label> 
                        <input type="number" name="category" placeholder="8934-354-3526" autoComplete="off"/>
                    </li>

                    <h2>Сведения об отце:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>ФИО:</label> 
                        <input type="text" name="category" placeholder="Иваненко Виктория Викторовна" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место работы:</label> 
                        <input type="text" name="category" placeholder="Завод Дальдизель" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Должность:</label> 
                        <input type="text" name="category" placeholder="инженер по нефтегазовым установкам" autoComplete="off"/>
                        <label className={styles.label}>Номер телефона:</label> 
                        <input type="number" name="category" placeholder="8934-354-3526" autoComplete="off"/>
                    </li>
                    
                    <li className={styles.formrow}>
                        <label className={styles.label}>Интересы, увлечения, хобби:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        <label className={styles.label}>Приписка к следующему военкомату:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Вид спорта:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                        <label className={styles.label}>Спортивный разряд:</label> 
                        <input type="text" name="category" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>Согласие на обработку персональных данных:</legend>
                        <input type="radio" name="drone" value="huey"/>
                        <label>Даю</label>
                        <input type="radio" name="drone" value="dewey"/>
                        <label>Не даю</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <button type="submit">Отправить</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
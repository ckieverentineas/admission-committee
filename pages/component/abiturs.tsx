import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react'
import Registrator from './registrator';
import styles from '/styles/Home.module.css'
export default function Abiturs() {
    const [dataman, setDataMan] = useState([])
    const [data, setData] = useState<any[]>([])
    const [show, setShow] = useState(true)
    
    async function componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('/api/abbitur');
        const datas = await response.json();
        console.log(datas)
        setDataMan(datas)
    }
    async function getAb(id: any) {
        // GET request using fetch with async/await
        const response = await fetch('/api/abiturone', {
            body: JSON.stringify({id: id}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const datas = await response.json();
        console.log(datas)
        setData(datas)
    }
    async function CreateDoc(id: any) {
        // GET request using fetch with async/await
        const response = await fetch('/api/docx', {
            body: JSON.stringify({id: id}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const datas = await response.json();
        console.log(datas)
    }
    useEffect(() => {
        componentDidMount();
    }, []);
    async function Select(id: any) {
        setShow(false)
        console.log("worked"+id)
        getAb(id)
    }
    async function Doca(id: any) {
        console.log("worked"+id)
        CreateDoc(id)
    }
    async function Back(id: any) {
        setShow(true)
        console.log("worked"+id)
        await componentDidMount()
    }
    function ListAbiturs() {
        if (show) {
            return (
                <div>
                    <h2 className={styles.title}>Поданные заявления аббитуриентов:</h2>
                    <div className={styles.grid}>
                    {dataman.map((key) => (
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
                            <button onClick={() => Select(key['id'])}>Подрбонее</button>
                            <button onClick={() => CreateDoc(key['id'])}>Сформировать заявление</button>
                            <a target="_blank" href={`./files/${key['id']}_${key['firstname']}_${key['name']}_${key['lastname']}.docx`} download>
                                <Link href={`./files/${key['id']}_${key['firstname']}_${key['name']}_${key['lastname']}.docx`} target="_blank">
                                <button>Открыть заявление</button></Link></a>
                        </div>
                    ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2 className={styles.title}>Заявление аббитуриента {data.firstname} {data.name} {data.lastname}:</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Паспорт:</h2>
                            <label>Гражданство:</label><input value={data.citizenship}></input>
                            <br/><label>Документ, удостоверяющий личность:</label><input value={data.passport}></input>
                            <br/><label>Серия:</label><input value={data.passport_seria}></input>
                            <br/><label>Номер:</label><input value={data.passport_number}></input>
                            <br/><label>Кем выдан:</label><input value={data.passport_place}></input>
                            <br/><label>Дата выдачи:</label><input value={data.passport_date}></input>
                            <br/><label>Фамилия:</label><input value={data.firstname}></input>
                            <br/><label>Имя:</label><input value={data.name}></input>
                            <br/><label>Отчество:</label><input value={data.lastname}></input>
                            <br/><label>Дата рождения:</label><input value={data.birthday}></input>
                            <br/><label>Место Рождения:</label><input value={data.birthday_place}></input>
                            <br/><label>Пол:</label><input value={data.gender}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Образование:</h2>
                            <label>Образовательное учреждение:</label><input value={data.education_complete_name}></input>
                            <br/><label>Год окончания:</label><input value={data.education_complete_year}></input>
                            <br/><label>Полученное образование:</label><input value={data.education_complete_category}></input>
                            <br/><label>Документ, подтверждающий полученное образование:</label><input value={data.education_complete_document}></input>
                            <br/><label>Серия:</label><input value={data.education_complete_seria}></input>
                            <br/><label>Номер:</label><input value={data.education_complete_number}></input>
                            <br/><label>Дата выдачи:</label><input value={data.education_complete_date}></input>
                            <br/><label>Поданный документ:</label><input value={data.education_complete_type}></input>
                            <br/><label>Медаль:</label><input value={data.medal}></input>
                            <br/><label>Победы в олимпиадах:</label><input value={data.olympiad}></input>
                            <br/><label>Количество троек:</label><input value={data.tree}></input>
                            <br/><label>Количество четверок:</label><input value={data.four}></input>
                            <br/><label>Количество пятерок:</label><input value={data.five}></input>
                            <br/><label>Средняя оценка аттестата:</label><input value={((parseInt(data.tree)*3+parseInt(data.four)*4+parseInt(data.five)*5)/(parseInt(data.tree)+parseInt(data.four)+parseInt(data.five))).toFixed(2)}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Контакты:</h2>
                            <label>Номер телефона:</label><input value={data.phone}></input>
                            <br/><label>Адрес регистрации места жительства:</label><input value={data.adress_register}></input>
                            <br/><label>Фактический адрес места жительства:</label><input value={data.adress_fact}></input>
                            <br/><label>e-mail:</label><input value={data.email}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Работа:</h2>
                            <label>Трудовой стаж, лет:</label><input value={data.work_stage_year}></input>
                            <br/><label>месяцев:</label><input value={data.work_stage_month}></input>
                            <br/><label>Место работы, занимаемая должность для заочников:</label><input value={data.work_place_post}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Мать:</h2>
                            <label>ФИО:</label><input value={data.parent_mother_initial}></input>
                            <br/><label>Место работы:</label><input value={data.parent_mother_work}></input>
                            <br/><label>Должность:</label><input value={data.parent_mother_work_post}></input>
                            <br/><label>Номер телефона:</label><input value={data.parent_mother_phone}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Отец:</h2>
                            <label>ФИО:</label><input value={data.parent_father_initial}></input>
                            <br/><label>Место работы:</label><input value={data.parent_father_work}></input>
                            <br/><label>Должность:</label><input value={data.parent_father_work_post}></input>
                            <br/><label>Номер телефона:</label><input value={data.parent_father_phone}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Выбор специальности:</h2>
                            <label>Специальность:</label><input value={data.specialization_first}></input>
                            <br/><label>Запасная специальность:</label><input value={data.specialization_second}></input>
                            <br/><label>Форма обучения:</label><input value={data.form_education}></input>
                            <br/><label>Место:</label><input value={data.form_education_pay}></input>
                            <br/><label>В общежитии:</label><input value={data.house}></input>
                        </div>
                        <div className={styles.card}>
                            <h2>Другое:</h2>
                            <label>Изучаемый иностранный язык:</label><input value={data.language}></input>
                            <br/><label>СНИЛС:</label><input value={data.snils}></input>
                            <br/><label>ИНН:</label><input value={data.inn}></input>
                            <br/><label>Среднее профессиональное образование (СПО) получаю:</label><input value={data.education_spo}></input>
                            <br/><label>Интересы, увлечения, хобби:</label><input value={data.hobby}></input>
                            <br/><label>Приписка к следующему военкомату:</label><input value={data.army}></input>
                            <br/><label>Вид спорта:</label><input value={data.sport}></input>
                            <br/><label>Спортивный разряд:</label><input value={data.sport_level}></input>
                            <br/><label>Согласие на обработку персональных данных:</label><input value={data.success}></input>
                        </div>
                        <button onClick={Back}>Назад</button>
                    </div>
                </div>
            )
        }
    }
    
    return (
        <div>
            {ListAbiturs()}
        </div>
    );
}
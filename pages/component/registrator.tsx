import { useState } from 'react'
import styles from '/styles/Home.module.css'
export default function Registrator() {
    function handleSubmit(e: any) {
        e.preventDefault()
        const {
            citizenship, passport, passport_seria,
            passport_number, passport_place, passport_date,
            firstname, name, lastname,
            birthday, birthday_place, phone,
            gender, adress_register, adress_fact,
            email, language, specialization_first,
            specialization_second, form_education, form_education_pay,
            education_complete_name, education_complete_year, education_complete_category,
            education_complete_document, education_complete_seria, education_complete_number,
            education_complete_date, education_complete_type, medal,
            olympiad, work_stage_year, work_stage_month,
            work_place_post, house, snils,
            inn, education_spo, parent_mother_initial,
            parent_mother_work, parent_mother_work_post, parent_mother_phone,
            parent_father_initial, parent_father_work, parent_father_work_post,
            parent_father_phone, hobby, army,
            sport, sport_level, success
            
        } = e.target.elements
        const data = {
            citizenship: citizenship.value, 
            passport: passport.value,
            passport_seria: passport_seria.value,
            passport_number: passport_number.value,
            passport_place: passport_place.value,
            passport_date: passport_date.value,
            firstname: firstname.value,
            name: name.value,
            lastname: lastname.value,
            birthday: birthday.value,
            birthday_place: birthday_place.value,
            phone: phone.value,
            gender: gender.value,
            adress_register: adress_register.value,
            adress_fact: adress_fact.value,
            email: email.value,
            language: language.value,
            specialization_first: specialization_first.value,
            specialization_second: specialization_second.value,
            form_education: form_education.value,
            form_education_pay: form_education_pay.value,
            education_complete_name: education_complete_name.value,
            education_complete_year: education_complete_year.value,
            education_complete_category: education_complete_category.value,
            education_complete_document: education_complete_document.value,
            education_complete_seria: education_complete_seria.value,
            education_complete_number: education_complete_number.value,
            education_complete_date: education_complete_date.value,
            education_complete_type: education_complete_type.value,
            medal: medal.value,
            olympiad: olympiad.value,
            work_stage_year: work_stage_year.value,
            work_stage_month: work_stage_month.value,
            work_place_post: work_place_post.value,
            house: house.value,
            snils: snils.value,
            inn: inn.value,
            education_spo: education_spo.value,
            parent_mother_initial: parent_mother_initial.value,
            parent_mother_work: parent_mother_work.value,
            parent_mother_work_post: parent_mother_work_post.value,
            parent_mother_phone: parent_mother_phone.value,
            parent_father_initial: parent_father_initial.value,
            parent_father_work: parent_father_work.value,
            parent_father_work_post: parent_father_work_post.value,
            parent_father_phone: parent_father_phone.value,
            hobby: hobby.value,
            army: army.value,
            sport: sport.value,
            sport_level: sport_level.value,
            success: success.value
        }
        //console.log(data)
        Register_User(data);
    }
    async function Register_User(data: any) {
        const res = await fetch('/api/abbitur', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()
        console.log(result)
        if (result) {
            alert("Успешно подана заявка")
            document.location.href= await "/"
        } else {
            alert("Неуспешно" + result)
        }
    }
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Создание заявления</h1>

            <form onSubmit={handleSubmit}>
                <ul className={styles.wrapper}>
                    <h2>Паспортные данные:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Гражданство:</label> 
                        <input type="text" name="citizenship" placeholder="РОССИЙСКАЯ ФЕДЕРАЦИЯ" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Документ, удостоверяющий личность:</label> 
                        <input type="text" list="list" name="passport" autoComplete="off"/>
                        <datalist id='list'>
                            <option value='ПАСПОРТ РФ'>паспорт Российской Федерации</option>
                            <option value='ЗАГРАНИЧНЫЙ ПАСПОРТ'>паспорт для граждан Российской Федерации, выежающих за пределы страны</option>
                            <option value='ИННОСТРАНЫЙ ПАСПОРТ'>паспорт иного государства</option>
                            <option value='ВОЕННЫЙ БИЛЕТ'>удостоверение личности военнослужащего</option>
                            <option value='ВРЕМЕННОЕ УДОСТОВЕРЕНИЕ'>временное удостоверение граждан Российской Федерации</option>
                            <option value='СВИДЕТЕЛЬСТВО О РОЖДЕНИИ'>свидетельство о государственной регистрации</option>
                        </datalist>
                    </li>
                    <hr/>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Серия:</label> 
                        <input type="number" name="passport_seria" max="9999" placeholder="0000" autoComplete="off"/>
                        <label className={styles.label}>Номер:</label> 
                        <input type="number" name="passport_number" max="999999" placeholder="000000" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Кем выдан:</label> 
                        <input type="text" name="passport_place" placeholder="УМВД РОССИИ ПО ХАБАРОВСКОМУ КРАЮ" autoComplete="off"/>
                        <label className={styles.label}>Дата выдачи:</label> 
                        <input type="date" name="passport_date" autoComplete="off"/>
                    </li>
                    <hr/>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Фамилия:</label> 
                        <input type="text" name="firstname" placeholder="ИВАНОВ" autoComplete="off"/>
                        <label className={styles.label}>Имя:</label> 
                        <input type="text" name="name" placeholder="ДМИТРИЙ" autoComplete="off"/>
                        
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Отчество:</label> 
                        <input type="text" name="lastname" placeholder="ИВАНОВИЧ" autoComplete="off"/>
                        <label className={styles.label}>Дата рождения:</label> 
                        <input type="date" name="birthday" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место Рождения:</label> 
                        <input type="text" name="birthday_place" placeholder="Г. ХАБАРОВСК" autoComplete="off"/>
                        <label className={styles.label}>Номер телефона:</label> 
                        <input type="tel" name="phone" maxLength={12} placeholder="88005557766" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>Выберите пол:</legend>
                        <input type="radio" name="gender" value="МУЖСКОЙ"/>
                        <label>Мужской</label>
                        <input type="radio" name="gender" value="ЖЕНСКИЙ"/>
                        <label>Женский</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Адрес регистрации места жительства:</label> 
                        <input type="text" name="adress_register" placeholder="ИНДЕКС, ПОЛНЫЙ АДРЕС ПОСТОЯННОЙ РЕГИСТРАЦИИ, РАЙОН" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Фактический адрес места жительства:</label> 
                        <input type="text" name="adress_fact" placeholder="ИНДЕКС, ПОЛНЫЙ АДРЕС МЕСТОЖИТЕЛЬСТВА, РАЙОН" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>e-mail:</label> 
                        <input type="email" name="email" placeholder="MYEMAIL@MAIL.RU" autoComplete="off"/>
                        <label className={styles.label}>Изучаемый иностранный язык:</label> 
                        <input type="text" name="language" placeholder="АНГЛИЙСКИЙ" autoComplete="off"/>
                    </li>
                    <hr/>
                    <h2>Выбор специальности:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Специальность:</label> 
                        <input type="text" list="specialization" name="specialization_first" autoComplete="off"/>
                        <label className={styles.label}>Запасная специальность:</label> 
                        <input type="text" list="specialization" name="specialization_second" autoComplete="off"/>
                        <datalist id='specialization'>
                            <option value='КС'>Компьютерные системы и комплексы</option>
                            <option value='ИС'>Информационные системы и программирование</option>
                        </datalist>
                    </li>
                    <fieldset>
                        <legend>Форма обучения:</legend>
                        <input type="radio" name="form_education" value="ОЧНАЯ"/>
                        <label>ОЧНАЯ</label>
                        <input type="radio" name="form_education" value="ЗАОЧНАЯ"/>
                        <label>ЗАОЧНАЯ</label>
                    </fieldset>
                    <fieldset>
                        <legend>Место:</legend>
                        <input type="radio" name="form_education_pay" value="БЮДЖЕТ"/>
                        <label>За счет ассингнованных средств краевого бюджета</label>
                        <input type="radio" name="form_education_pay" value="ДОГОВОР"/>
                        <label>Договор с оплатой стоимости обучения</label>
                    </fieldset>
                    <h2>Информация об образовательном учреждении:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Образовательное учреждение:</label> 
                        <input type="text" name="education_complete_name" placeholder="НАИМЕНОВАНИЕ УЧЕБНОГО ЗАВЕДЕНИЯ, ЧТО ЗАКОНЧИЛИ" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Год окончания:</label> 
                        <input type="number" min="1900" max="2099" name="education_complete_year" placeholder="2022" autoComplete="off"/>
                        <label className={styles.label}>Полученное образование:</label> 
                        <input type="text" list="education_type" name="education_complete_category" autoComplete="off"/>
                        <datalist id='education_type'>
                            <option value='СРЕДНЕЕ ОБЩЕЕ'>11 КЛАССОВ</option>
                            <option value='ОСНОВНОЕ ОБЩЕЕ'>9 КЛАССОВ</option>
                            <option value='СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ'>КОЛЛЕДЖ</option>
                            <option value='НАЧАЛЬНОЕ ПРОФЕССИОНАЛЬНОЕ'>УЧИЛИЩЕ</option>
                        </datalist>
                    </li>
                    <fieldset>
                        <legend>Документ, подтверждающий полученное образование:</legend>
                        <input type="radio" name="education_complete_document" value="АТТЕСТАТ"/>
                        <label>АТТЕСТАТ</label>
                        <input type="radio" name="education_complete_document" value="ДИПЛОМ"/>
                        <label>ДИПЛОМ</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Серия:</label> 
                        <input type="number" name="education_complete_seria" autoComplete="off"/>
                        <label className={styles.label}>Номер:</label> 
                        <input type="number" name="education_complete_number" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Дата выдачи:</label> 
                        <input type="date" name="education_complete_date" autoComplete="off"/>
                        <label className={styles.label}>Поданный документ:</label> 
                        <input type="text" list="education_document_type" name="education_complete_type" autoComplete="off"/>
                        <datalist id='education_document_type'>
                            <option value='ОРИГИНАЛ'>ОРИГИНАЛ ДОКУМЕНТА ОБ ОБРАЗОВАНИИ</option>
                            <option value='КОПИЯ'>КСЕРОКОПИЯ ДОКУМЕНТА ОБ ОБРАЗОВАНИИ</option>
                        </datalist>
                    </li>
                    <fieldset>
                        <legend>Медаль:</legend>
                        <input type="radio" name="medal" value="МЕДАЛЬ ЕСТЬ"/>
                        <label>ЕСТЬ</label>
                        <input type="radio" name="medal" value="МЕДАЛИ НЕТ"/>
                        <label>НЕТ</label>
                    </fieldset>
                    <fieldset>
                        <legend>Победы в олимпиадах:</legend>
                        <input type="radio" name="olympiad" value="ПОБЕДИТЕЛЬ ОЛИМПИАД"/>
                        <label>ПОБЕДИТЕЛЬ ОЛИМПИАД</label>
                        <input type="radio" name="olympiad" value="ПОБЕДЫ В ОЛПИМПИАДАХ ОТСУТСТВУЮТ"/>
                        <label>ПОБЕДЫ В ОЛПИМПИАДАХ ОТСУТСТВУЮТ</label>
                    </fieldset>
                    <h2>Информация о работе:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Трудовой стаж, лет:</label> 
                        <input type="number" name="work_stage_year" max="99" placeholder="1" autoComplete="off"/>
                        <label className={styles.label}>месяцев:</label> 
                        <input type="number" name="work_stage_month" max="12" placeholder="6" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место работы, занимаемая должность для заочников:</label> 
                        <input type="text" name="work_place_post" placeholder="МЕСТО РАБОТЫ, ЗАНИМАЕМАЯ ДОЛЖНОСТЬ ДЛЯ ЗАОЧНИКОВ" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>В общежитии:</legend>
                        <input type="radio" name="house" value="НУЖДАЮСЬ В ОБЩЕЖИТИИ"/>
                        <label>НУЖДАЮСЬ</label>
                        <input type="radio" name="house" value="НЕ НУЖДАЮСЬ В ОБЩЕЖИТИИ"/>
                        <label>НЕ НУЖДАЮСЬ</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <label className={styles.label}>СНИЛС:</label> 
                        <input type="number" name="snils" max="99999999999" placeholder="00000000000" autoComplete="off"/>
                        <label className={styles.label}>ИНН:</label> 
                        <input type="number" name="inn" max="999999999999" placeholder="000000000000" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>Среднее профессиональное образование (СПО) получаю:</legend>
                        <input type="radio" name="education_spo" value="СПО ПОЛУЧАЮ ВПЕРВЫЕ"/>
                        <label>ВПЕРВЫЕ</label>
                        <input type="radio" name="education_spo" value="СПО ПОЛУЧАЮ НЕ ВПЕРВЫЕ"/>
                        <label>НЕ ВПЕРВЫЕ</label>
                    </fieldset>

                    <h2>Сведения о матери:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>ФИО:</label> 
                        <input type="text" name="parent_mother_initial" placeholder="ИВАНЕНКО ВИКТОРИЯ ВИКТОРОВНА" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место работы:</label> 
                        <input type="text" name="parent_mother_work" placeholder="ООО <<АТЕЛЬЕ>>" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Должность:</label> 
                        <input type="text" name="parent_mother_work_post" placeholder="ЗАМЕСТИТЕЛЬ ДИРЕКТОРА" autoComplete="off"/>
                        <label className={styles.label}>Номер телефона:</label> 
                        <input type="tel" name="parent_mother_phone" maxLength={12} placeholder="89343543526" autoComplete="off"/>
                    </li>

                    <h2>Сведения об отце:</h2>
                    <li className={styles.formrow}>
                        <label className={styles.label}>ФИО:</label> 
                        <input type="text" name="parent_father_initial" placeholder="ИВАНЕНКО ВИКТОР МИЛИТОРОВИЧ" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Место работы:</label> 
                        <input type="text" name="parent_father_work" placeholder="ЗАВОД ДАЛЬДИЗЕЛЬ" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Должность:</label> 
                        <input type="text" name="parent_father_work_post" placeholder="ИНЖЕНЕР ПО НЕФТЕГАЗОВЫМ УСТАНОВКАМ" autoComplete="off"/>
                        <label className={styles.label}>Номер телефона:</label> 
                        <input type="tel" name="parent_father_phone" maxLength={12} placeholder="89343543526" autoComplete="off"/>
                    </li>
                    
                    <li className={styles.formrow}>
                        <label className={styles.label}>Интересы, увлечения, хобби:</label> 
                        <input type="text" name="hobby" placeholder="ВАШИ ИНТЕРЕСЫ" autoComplete="off"/>
                        <label className={styles.label}>Приписка к следующему военкомату:</label> 
                        <input type="text" name="army" placeholder="УЧЕТ В КАКОМ ВОЕНКОМАТЕ?" autoComplete="off"/>
                    </li>
                    <li className={styles.formrow}>
                        <label className={styles.label}>Вид спорта:</label> 
                        <input type="text" name="sport" placeholder="БАСКЕТБОЛ" autoComplete="off"/>
                        <label className={styles.label}>Спортивный разряд:</label> 
                        <input type="text" name="sport_level" placeholder="КМС" autoComplete="off"/>
                    </li>
                    <fieldset>
                        <legend>Согласие на обработку персональных данных:</legend>
                        <input type="radio" name="success" value="СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ ДАЮ"/>
                        <label>ДАЮ</label>
                        <input type="radio" name="success" value="СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ НЕ ДАЮ"/>
                        <label>НЕ ДАЮ</label>
                    </fieldset>
                    <li className={styles.formrow}>
                        <button type="submit">Отправить</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
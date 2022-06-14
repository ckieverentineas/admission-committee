import { PrismaClient } from '@prisma/client'
import { promises as fs } from 'fs';
import {Document, Drawing} from 'docx'
import createReport from 'docx-templates';
import { Children } from 'react';
const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { id } = req.body
        console.log(req.body)
        const user = await prisma.passport.findFirst({
            where: {
                id
            }}
        )
        const template = await fs.readFile('./public/temple/test.docx');

        const buffer = await createReport({
        template,
        data: {
            citizenship: user?.citizenship, 
            passport: user?.passport,
            passport_seria: user?.passport_seria,
            passport_number: user?.passport_number,
            passport_place: user?.passport_place,
            passport_date: user?.passport_date,
            firstname: user?.firstname,
            name: user?.name,
            lastname: user?.lastname,
            birthday: user?.birthday,
            birthday_place: user?.birthday_place,
            phone: user?.phone,
            gender: user?.gender,
            adress_register: user?.adress_register,
            adress_fact: user?.adress_fact,
            email: user?.email,
            language: user?.language,
            specialization_first: user?.specialization_first,
            specialization_second: user?.specialization_second,
            form_education: user?.form_education,
            form_education_pay: user?.form_education_pay,
            education_complete_name: user?.education_complete_name,
            education_complete_year: user?.education_complete_year,
            education_complete_category: user?.education_complete_category,
            education_complete_document: user?.education_complete_document,
            education_complete_seria: user?.education_complete_seria,
            education_complete_number: user?.education_complete_number,
            education_complete_date: user?.education_complete_date,
            education_complete_type: user?.education_complete_type,
            medal: user?.medal,
            olympiad: user?.olympiad,
            work_stage_year: user?.work_stage_year,
            work_stage_month: user?.work_stage_month,
            work_place_post: user?.work_place_post,
            house: user?.house,
            snils: user?.snils,
            inn: user?.inn,
            education_spo: user?.education_spo,
            parent_mother_initial: user?.parent_mother_initial,
            parent_mother_work: user?.parent_mother_work,
            parent_mother_work_post: user?.parent_mother_work_post,
            parent_mother_phone: user?.parent_mother_phone,
            parent_father_initial: user?.parent_father_initial,
            parent_father_work: user?.parent_father_work,
            parent_father_work_post: user?.parent_father_work_post,
            parent_father_phone: user?.parent_father_phone,
            hobby: user?.hobby,
            army: user?.army,
            sport: user?.sport,
            sport_level: user?.sport_level,
            success: user?.success
        },
        cmdDelimiter: ['{', '}'],
        });
        await fs.writeFile(`./public/files/${id}_${user?.firstname}_${user?.name}_${user?.lastname}.docx`, buffer)
        await res.status(200).json({link: `./public/temple/${id}_${user?.firstname}_${user?.name}_${user?.lastname}.docx`})
    }
    prisma.$disconnect()
}
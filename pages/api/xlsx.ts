import { PrismaClient } from '@prisma/client'
import { promises as fs } from 'fs';
import {Document, Drawing} from 'docx'
import createReport from 'docx-templates';
import { Children } from 'react';
import xlsx from 'xlsx';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        let { specialization_first } = req.body
        console.log(req.body)
        const data = await prisma.passport.findMany({
            where: {
                specialization_first
            },
            select: {
                id: true,
                firstname: true,
                name: true,
                lastname: true,
                tree:true,
                four: true,
                five: true,
                education_complete_type: true
            }
        }
            
        )

        const WorkSheet = xlsx.utils.json_to_sheet(data)
        const WorkBook = xlsx.utils.book_new()
        xlsx.utils.book_append_sheet(WorkBook, WorkSheet, "Dates");

        /* fix headers */
        xlsx.utils.sheet_add_aoa(WorkSheet, [["№ п/п", "Фамилия", "Имя", "Отчество", "тройки", "четверки", "пятерки", "копия/оригинал"]], { origin: "A1" });

        /* create an XLSX file and try to save to Presidents.xlsx */
        const sela = xlsx.writeFile(WorkBook, `./public/tables/${specialization_first}.xlsx`);
        await res.status(200).json({link: `./public/tables/${specialization_first}.xlsx`})
    }
    prisma.$disconnect()
}
import { PrismaClient } from '@prisma/client'
import { promises as fs } from 'fs';
import {Document, Drawing} from 'docx'
import createReport from 'docx-templates';
import { Children } from 'react';
import xlsx from 'json-as-xlsx';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        let { specialization_first } = req.body
        specialization_first = "КС"
        console.log(req.body)
        const data = await prisma.passport.findMany({
            where: {
                specialization_first
            }}
        )
        let i = await Object.keys(data).length;
        console.log(i)
        let sta = ''
        for(let t=0; t<i; t++) {
            sta += data[t]+', '
        }
        console.log(sta)
        const testing: any[] = [
            {
                sheet: "Adults",
                columns: [
                    { label: "№ п/п", value: (rows) => i++ },
                    { label: "ФИО абитуриента", value: (rows: { firstname: any; name: any; lastname: any; }) => rows.firstname + " " + rows.name + " " + rows.lastname},
                    { label: "ср. балл", value: (rows: { tree: string; four: string; five: string; }) => ((parseInt(rows.tree)*3+parseInt(rows.four)*4+parseInt(rows.five)*5)/(parseInt(rows.tree)+parseInt(rows.four)+parseInt(rows.five))).toFixed(2)},
                    { label: "копия/оригинал", value: 'education_complete_type'}
                ],
                content: [
                    sta
                ],
            }
        ]
        const settings: any = {
            writeOptions: {
                type: "buffer",
                bookType: "xlsx",
            },
        }

        const buffer = xlsx(testing, settings)
        res.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-disposition": "attachment; filename=MySheet.xlsx",
        })
        res.end(buffer)
    }
    prisma.$disconnect()
}
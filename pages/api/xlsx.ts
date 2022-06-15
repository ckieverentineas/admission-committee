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
        specialization_first = "Технология аналитического контроля химических соединений"
        console.log(req.body)
        const data = await prisma.passport.findFirst({
            where: {
                specialization_first
            }}
        )
        const testing: any[] = [
            {
                sheet: "Adults",
                columns: [
                    { label: "№ п/п", value: "1++" },
                    { label: "ФИО абитуриента", value: (row: { firstname: any; name: any; lastname: any; }) => row.firstname + " " + row.name + " " + row.lastname},
                    { label: "ср. балл", value: (row: { tree: string; four: string; five: string; }) => ((parseInt(row.tree)*3+parseInt(row.four)*4+parseInt(row.five)*5)/(parseInt(row.tree)+parseInt(row.four)+parseInt(row.five))).toFixed(2)},
                    { label: "копия/оригинал", value: 'education_complete_type'}
                ],
                content: [
                    data
                ],
                },
                {
                sheet: "Pets",
                columns: [
                    { label: "Name", value: "name" },
                    { label: "Age", value: "age" },
                ],
                content: [
                    { name: "Malteada", age: 4, more: { phone: "99999999" } },
                    { name: "Picadillo", age: 1, more: { phone: "87654321" } },
                ],
            },
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
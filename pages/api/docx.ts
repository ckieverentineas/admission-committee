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
            name: 'John',
            surname: 'Appleseed',
        },
        cmdDelimiter: ['{', '}'],
        });
        await fs.writeFile(`./public/files/${id}_${user?.firstname}_${user?.name}_${user?.lastname}.docx`, buffer)
        await res.status(200).json({link: `./public/temple/${id}_${user?.firstname}_${user?.name}_${user?.lastname}.docx`})
    }
    prisma.$disconnect()
}
/*
  Warnings:

  - You are about to drop the column `born` on the `Passport` table. All the data in the column will be lost.
  - You are about to drop the column `pas_date` on the `Passport` table. All the data in the column will be lost.
  - You are about to drop the column `pas_get` on the `Passport` table. All the data in the column will be lost.
  - You are about to drop the column `pas_num` on the `Passport` table. All the data in the column will be lost.
  - You are about to drop the column `pas_ser` on the `Passport` table. All the data in the column will be lost.
  - You are about to alter the column `birthday` on the `Passport` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.
  - Added the required column `adress_fact` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adress_register` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `army` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday_place` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `citizenship` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_category` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_date` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_document` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_name` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_number` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_seria` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_type` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_complete_year` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education_spo` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `form_education` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `form_education_pay` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobby` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `house` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medal` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `olympiad` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_father_initial` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_father_phone` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_father_work` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_father_work_post` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_mother_initial` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_mother_phone` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_mother_work` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_mother_work_post` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport_date` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport_number` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport_place` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport_seria` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization_first` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization_second` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sport` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sport_level` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `success` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_place_post` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_stage_month` to the `Passport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_stage_year` to the `Passport` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Passport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "citizenship" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "passport_seria" INTEGER NOT NULL,
    "passport_number" INTEGER NOT NULL,
    "passport_place" TEXT NOT NULL,
    "passport_date" DATETIME NOT NULL,
    "firstname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthday" INTEGER NOT NULL,
    "birthday_place" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "adress_register" TEXT NOT NULL,
    "adress_fact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "specialization_first" TEXT NOT NULL,
    "specialization_second" TEXT NOT NULL,
    "form_education" TEXT NOT NULL,
    "form_education_pay" TEXT NOT NULL,
    "education_complete_name" TEXT NOT NULL,
    "education_complete_year" INTEGER NOT NULL,
    "education_complete_category" TEXT NOT NULL,
    "education_complete_document" TEXT NOT NULL,
    "education_complete_seria" INTEGER NOT NULL,
    "education_complete_number" INTEGER NOT NULL,
    "education_complete_date" DATETIME NOT NULL,
    "education_complete_type" TEXT NOT NULL,
    "medal" TEXT NOT NULL,
    "olympiad" TEXT NOT NULL,
    "work_stage_year" INTEGER NOT NULL,
    "work_stage_month" INTEGER NOT NULL,
    "work_place_post" TEXT NOT NULL,
    "house" TEXT NOT NULL,
    "snils" INTEGER NOT NULL,
    "inn" INTEGER NOT NULL,
    "education_spo" TEXT NOT NULL,
    "parent_mother_initial" TEXT NOT NULL,
    "parent_mother_work" TEXT NOT NULL,
    "parent_mother_work_post" TEXT NOT NULL,
    "parent_mother_phone" INTEGER NOT NULL,
    "parent_father_initial" TEXT NOT NULL,
    "parent_father_work" TEXT NOT NULL,
    "parent_father_work_post" TEXT NOT NULL,
    "parent_father_phone" INTEGER NOT NULL,
    "hobby" TEXT NOT NULL,
    "army" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "sport_level" TEXT NOT NULL,
    "success" TEXT NOT NULL
);
INSERT INTO "new_Passport" ("birthday", "firstname", "gender", "id", "inn", "lastname", "name", "snils") SELECT "birthday", "firstname", "gender", "id", "inn", "lastname", "name", "snils" FROM "Passport";
DROP TABLE "Passport";
ALTER TABLE "new_Passport" RENAME TO "Passport";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

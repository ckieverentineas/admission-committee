-- CreateTable
CREATE TABLE "Passport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "born" TEXT NOT NULL,
    "pas_ser" INTEGER NOT NULL,
    "pas_num" INTEGER NOT NULL,
    "pas_get" TEXT NOT NULL,
    "pas_date" DATETIME NOT NULL,
    "snils" INTEGER NOT NULL,
    "inn" INTEGER NOT NULL
);

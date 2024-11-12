/*
  Warnings:

  - Changed the type of `borrowDate` on the `borrow-records` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "borrow-records" DROP COLUMN "borrowDate",
ADD COLUMN     "borrowDate" TIMESTAMP(3) NOT NULL;

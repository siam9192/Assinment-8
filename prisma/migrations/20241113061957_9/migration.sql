/*
  Warnings:

  - Added the required column `bookId` to the `borrow-records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "borrow-records" ADD COLUMN     "bookId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "borrow-records" ADD CONSTRAINT "borrow-records_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

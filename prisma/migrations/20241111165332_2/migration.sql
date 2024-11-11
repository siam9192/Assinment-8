/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BorrowRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BorrowRecord" DROP CONSTRAINT "BorrowRecord_memberId_fkey";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "BorrowRecord";

-- DropTable
DROP TABLE "Member";

-- CreateTable
CREATE TABLE "books" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genree" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "members" (
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "memberShipDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "borrow-records" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "borrow-records_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_memberId_key" ON "members"("memberId");

-- AddForeignKey
ALTER TABLE "borrow-records" ADD CONSTRAINT "borrow-records_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

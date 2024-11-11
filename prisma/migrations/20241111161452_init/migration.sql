-- CreateTable
CREATE TABLE "Book" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genree" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Member" (
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "memberShipDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "BorrowRecord" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "BorrowRecord_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_memberId_key" ON "Member"("memberId");

-- AddForeignKey
ALTER TABLE "BorrowRecord" ADD CONSTRAINT "BorrowRecord_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

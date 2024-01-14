-- CreateTable
CREATE TABLE "RockPaperScissor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WinningMatch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "rockPaperScissorId" INTEGER,
    CONSTRAINT "WinningMatch_rockPaperScissorId_fkey" FOREIGN KEY ("rockPaperScissorId") REFERENCES "RockPaperScissor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

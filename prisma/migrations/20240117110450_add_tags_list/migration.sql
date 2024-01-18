/*
  Warnings:

  - You are about to drop the column `tags` on the `Recipe` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "youtubeUrl" TEXT,
    "source" TEXT,
    "tagsId" INTEGER,
    CONSTRAINT "Recipe_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "Tags" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("area", "category", "id", "instructions", "name", "source", "thumbnail", "youtubeUrl") SELECT "area", "category", "id", "instructions", "name", "source", "thumbnail", "youtubeUrl" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

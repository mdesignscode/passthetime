/*
  Warnings:

  - You are about to drop the column `tagsId` on the `Recipe` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "recipeId" INTEGER,
    CONSTRAINT "Tags_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tags" ("id", "name") SELECT "id", "name" FROM "Tags";
DROP TABLE "Tags";
ALTER TABLE "new_Tags" RENAME TO "Tags";
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "youtubeUrl" TEXT,
    "source" TEXT
);
INSERT INTO "new_Recipe" ("area", "category", "id", "instructions", "name", "source", "thumbnail", "youtubeUrl") SELECT "area", "category", "id", "instructions", "name", "source", "thumbnail", "youtubeUrl" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

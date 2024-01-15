-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "tags" TEXT,
    "youtubeUrl" TEXT,
    "source" TEXT
);
INSERT INTO "new_Recipe" ("area", "category", "id", "instructions", "name", "source", "tags", "thumbnail", "youtubeUrl") SELECT "area", "category", "id", "instructions", "name", "source", "tags", "thumbnail", "youtubeUrl" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

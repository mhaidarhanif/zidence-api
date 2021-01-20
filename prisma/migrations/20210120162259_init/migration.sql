-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.handle_unique" ON "User"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Property.slug_unique" ON "Property"("slug");

-- AddForeignKey
ALTER TABLE "Property" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `currentPeriodEnd` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `plan` on the `Subscription` table. All the data in the column will be lost.
  - Changed the type of `status` on the `Subscription` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "subscriptionStatus" AS ENUM ('active', 'cancelled', 'completed');

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "currentPeriodEnd",
DROP COLUMN "plan",
DROP COLUMN "status",
ADD COLUMN     "status" "subscriptionStatus" NOT NULL;

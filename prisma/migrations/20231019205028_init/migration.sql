-- CreateTable
CREATE TABLE `IRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `returnType` VARCHAR(191) NOT NULL,
    `format` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IParameter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NULL,
    `requestId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `IParameter` ADD CONSTRAINT `IParameter_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `IRequest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

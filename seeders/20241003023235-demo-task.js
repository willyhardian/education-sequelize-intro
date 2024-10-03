"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        const tasks = JSON.parse(fs.readFileSync("./data.json", "utf-8")).map(
            (task) => {
                delete task.id;
                return {
                    ...task,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
            }
        );
        await queryInterface.bulkInsert("Tasks", tasks, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete("Tasks", null, {});
    },
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const date = new Date(Date.now()).toLocaleString();
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready at ${date}`);
    }
};

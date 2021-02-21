const connection = require("../database/connection");
const exec = require("child_process").exec;

module.exports = {
    async create(request, response) {
        const { nome_exibicao } = request.body;
        const file = request.file;

        const resp = exec(
            `node ./src/services/parseZip.js ${file.filename} ${nome_exibicao}`
        );

        resp.stdout.on("data", (data) => {
            console.log(`stdout: ${data}`);
        });

        resp.stderr.on("data", (data) => {
            console.error(`stderr: ${data}`);
        });

        resp.on("close", (code) => {
            console.log(`child process exited with code ${code}`);
        });

        return response.json("fim");
    },
};

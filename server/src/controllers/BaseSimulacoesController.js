const connection = require("../database/connection");
const exec = require("child_process").exec;
const path = require("path");

module.exports = {
    async create(request, response) {
        // const { nome_exibicao } = request.body;
        const { filename, originalname } = request.file;
        const nome_exibicao = path.basename(
            originalname,
            path.extname(originalname)
        );

        // console.log(nome_exibicao, filename);

        const resp = exec(
            `node ./src/services/parseZip.js ${filename} ${nome_exibicao}`
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

        return response.status(200);
    },
};

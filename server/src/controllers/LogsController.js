const fs = require("fs/promises");

module.exports = {
    async index(request, response) {
        const dir = "./logs";
        try {
            const files = await fs.readdir(dir, "utf8");
            return response.status(201).json({ status: "ok", files });
        } catch (err) {
            console.error(err);
        }
    },
    async show(request, response) {
        try {
            const { file } = request.params;
            const dir = "./logs";

            const contends = await fs.readFile(`${dir}/${file}`, "utf8");

            return response.json({ contends: contends.split("\n") });
        } catch (err) {
            console.error(err);
        }
    },
};

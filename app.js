const express = require("express");
const ChecklistRouter = require("./src/routes/checklist");
require("./config/database");

const app = express();
app.use(express.json());

app.use("/checklists", ChecklistRouter);

app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});

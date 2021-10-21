const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/index.html"));
	// отпрвка файла на страницу
	// path.join(__dirname,...) нужен для того, чтобы файлы правильно считывались из конкретной папки
});
// обработка маршрута

router.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "../page/login.html"));
});

module.exports = router;
// экспорт модуля

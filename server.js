require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// подключение библиотек

const test = require("./app/routes/test");
// подключение файла пути - роута

const port = process.env.PORT || 3003;
// указываем порт

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// в дальнейшем для правльной обработки и считывания отправленных данных

app.use(express.static(path.join(__dirname, "app")));
app.use(express.static(path.join(__dirname, "app/page")));
// необходимое указывание для различных статичных файлов, типа стилей, картинок и пр

app.use("/", test);
// наш общий маршрут

app.use((req, res, next) => {
	res.status(404);
	// отправка статута на страницу
	res.sendFile(path.join(__dirname, "app/page/404.html"));
	// отпрвка файла на страницу
});
// не обходимая штука для отображения страницы 404, если иная не прописана в наших маршрутах

app.listen(port, () => {
	console.log("\x1b[35m%s\x1b[0m", `The server is running on the port ${port}`);
	console.log("\x1b[32m%s\x1b[0m", `http://localhost:${port}/`);
});
// прослушивание нашего сервера на порту

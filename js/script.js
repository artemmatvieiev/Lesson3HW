const enter = confirm("Здравствуйте! Вы хотите войти в нашу базу фильмов?")
if (enter == true){
	const userName = prompt("Как вас зовут?")
	do {
		const cmd = prompt(userName + " Введите команду\n(если вам нужна помощь введите команду help)")

		if (cmd == "exit") {
			alert("До свидания! Ждем вас еще.")
			break
		}
		switch (cmd) {
			case "list": {
				var listRes = "Список фильмов:\n"
				listCmd()
				alert(listRes)
				break
			}
			case "view": {
				let numFilm = prompt("Введите номер фильма") - 1
				let linkFilm = "Чтоб просмотреть фильм \"" + filmBase[numFilm].name + "\" \nскопируйте и вставте ссылку в своем браузере:\n\n" + filmBase[numFilm].link
				alert(linkFilm)
				break
			}
			case "add": {
				let film = {}
				tastNameFilm(film)
				tastYearFilm(film)
				film.link = prompt("Введите ссылку на фильм")
				filmBase.push(film)
				alert("Фильм " + film.name + " добавлен в базу")
				break
			}
			case "quantity":
				alert("Всего фильмов: " + filmBase.length)
				break
			case "search name": {
				let film = {}
				tastNameFilm(film)
				search(film)
				break
			}
			case "search year": {
				let film = {}
				tastYearFilm(film)
				search(film, "year")
				break
			}
			case "help": {
				alert(`list - список всех фильмов\n 
view - просмотр ссылки фильма по номеру из списка фильмов\n
add - добавление фильма в базу\n
quantity - количество фильмов в базе\n
search name - поиск фильма по названию\n
search year - поиск фильма по году\n
exit - выход\n`)
				break
			}
			default:
				alert("Комманда " + cmd + " не найдена")
				break
		}
	} while (true)
} else { 
		alert("До свидания! Ждем вас еще.")
}
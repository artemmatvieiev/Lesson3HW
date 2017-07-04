let filmBase = [ 
	{ name: "Солт", 
	  year: 2010, 
	  link: "http://kinotochka.club/2938-solt-2010.html"
	},
	{ name: "Кинг Конг: Остров черепа", 
	  year: 2017,
	  link: "http://kinotochka.club/4450-king-kong-ostrov-cherepa-2017.html"
	},
	{ name: "Армагеддон", 
	  year: 1998, 
	  link: "http://kinotochka.club/9191-armageddon-1998.html"
	},
	{ name: "Голодные игры: И вспыхнет пламя", 
	  year: 2013, 
	  link: "http://kinotochka.club/482-golodnye-igry-i-vspyhnet-plamya-2013.html"
	},
	{ name: "Дэдпул", 
	  year: 2016, 
	  link: "http://kinotochka.club/5144-dedpul-2016.html"
	}
]
function tastNameFilm(film) {
	film.name = prompt("Введите название фильма")
	if (film.name) return film
	else {
		alert("В названии фильма должен содержаться хоть один символ")
		tastNameFilm(film)
	}
}
function tastYearFilm(film) {
	film.year = prompt("Введите год выхода фильма")
	if ((film.year >= 1895) && (film.year <= 2017)) return film
	else {
		alert("Вы ввели неправильный год выхода фильма")
		tastYearFilm(film)
	}
}
function listCmd() {
	for (let i = 0; i < filmBase.length ; i++) {
		listRes += (i + 1) + ". " + filmBase[i].name + " (" 
		+ filmBase[i].year + ")" + "\n"
	}
	return listRes
}
function search(film, searchField = "name") {
	let searchRes = "Результат поиска:\n"
	for (let i = 0; i < filmBase.length ; i++) {
		if (filmBase[i][searchField] == film[searchField]) {
			searchRes += (i + 1) + ". " + filmBase[i].name + " (" 
			+ filmBase[i].year + ")" + "\n"
		}
	}
	if (searchRes == "Результат поиска:\n") {
		alert("Фильм не найден")
	} else{
			alert(searchRes)
		}
}
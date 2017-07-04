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
			
		}
	} while (true)
} else { 
		alert("До свидания! Ждем вас еще.")
}
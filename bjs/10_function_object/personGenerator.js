const monthRandom = Math.floor(Math.random() * 3);

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Петр",
            "id_6": "Денис",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Глеб"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Светлана",
            "id_3": "Маргарита",
            "id_4": "Юлия",
            "id_5": "Милана",
            "id_6": "Елена",
            "id_7": "Кристина",
            "id_8": "Екатерина",
            "id_9": "Виктория",
            "id_10": "Анжелика"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Слесарь-сантехник",
            "id_3": "Тракторист",
            "id_4": "Монтажник",
            "id_5": "Сварщик",
            "id_6": "Разнорабочий",
            "id_7": "Дворник",
            "id_8": "Повар",
            "id_9": "Врач",
            "id_10": "Геолог"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Педагог",
            "id_3": "Манекенщица",
            "id_4": "Воспитатель",
            "id_5": "Психолог",
            "id_6": "Уборщица",
            "id_7": "Продавец",
            "id_8": "Бухгалтер",
            "id_9": "Маркетолог",
            "id_10": "Кассир"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomSurname: function() {  
        if (this.person.gender =='Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }

    },

    randomFirstName: function() {
        if (this.person.gender =='Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson)};    
    },
    
    randomPatronymic: function () {
        if (this.person.gender =='Мужчина') {
            return this.randomValue(this.firstNameMaleJson) + 'ович';
        } else {
            return this.randomValue(this.firstNameMaleJson) + 'овна';
        }
    },

    randomGender: function () {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomMonth28: function randomMonth() {
		let month = `февраля`;
		return month;
	},

    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonth31: function randomMonth() {
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },

    randomBirthYear: function () {
        return this.randomIntNumber (2000,1950) + ' года рождения';
    },
    
    randomProfession: function () {
        if (this.person.gender =='Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();

        if (monthRandom === 0) {
            this.person.month = this.randomMonth28();
            this.person.day = this.randomIntNumber(28,1);
        } else if (monthRandom === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(30,1);
        } else if (monthRandom === 2) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(31,1);
        };
        
        this.person.profession = this.randomProfession();
        this.person.birthYear = this.randomBirthYear(2000,1950);
        return this.person;
    }
};

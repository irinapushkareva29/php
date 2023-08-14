
//window.onload = function()
//{
//    const initPerson = personGenerator.getPerson();
  //  document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    
    //document.getElementById('surnameOutput').innerText = initPerson.surname;

    //document.getElementById ('genderOutput').innerText = initPerson.gender;

    //document.getElementById ('patronymicOutput').innerText = initPerson.patronymic;

    //document.getElementById ('professionOutput').innerText = initPerson.profession;

    //document.getElementById ('birthYearOutput').innerText = initPerson.birthYear;
//}

document.getElementById('generation').addEventListener('click', function() { 
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('dayOutput').innerText = initPerson.day;
    document.getElementById('monthOutput').innerText = initPerson.month;
    document.getElementById ('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

document.getElementById('clear').addEventListener('click', function() { 
    document.getElementById('surnameOutput').innerText = ' ';
    document.getElementById('firstNameOutput').innerText = ' ';
    document.getElementById('patronymicOutput').innerText = ' ';
    document.getElementById('genderOutput').innerText = 'Пол, ';
    document.getElementById('dayOutput').innerText = 'Число, ';
    document.getElementById('monthOutput').innerText = 'месяц, ';
    document.getElementById('birthYearOutput').innerText = 'год рождения, ';
    document.getElementById('professionOutput').innerText = 'Профессия';
}
);
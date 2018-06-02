//JavaScript для напоминаний
var countOfBook = 0;
counter = parseInt(countOfBook);
var str1="";
var str2="";
var str3="";
var box = document.querySelector('.list_field');
for (var i=0; i<localStorage.length/3; i++) 
{
	
	var stAdd = localStorage.getItem("addkey"+i);
  	str1 = stAdd  ; 
  	var stPerson = localStorage.getItem("personkey"+i);
	str2 = stPerson ; 
	var stTime = localStorage.getItem("timekey"+i);
	str3 = stTime ; 


var newBook = document.createElement('div');
	newBook.classList.add('item');
	
	
	var pAdd = document.createElement('p');
	pAdd.classList.add('addkey'+counter);
	var pPerson = document.createElement('p');
	pPerson.classList.add('personkey' + counter);
	var pTime = document.createElement('p');
	pTime.classList.add('timekey'+counter);
	pAdd.textContent = (str1);
	pPerson.textContent = (str2);
	pTime.textContent = (str3);
	
	
	newBook.appendChild(pTime);
	newBook.appendChild(pPerson)
	newBook.appendChild(pAdd);
	box.appendChild(newBook);
	
counter++;
}

function addBook()
{
	var emptyAddress = document.querySelector('.add-address');
	var emptyPhone = document.querySelector('.Phone');
	var emptyName = document.querySelector('.PName');
	var emptyDate = document.querySelector('.tcal');
	var emptyTime = document.querySelector('.time');
	var book = document.querySelector('.add-address').value;
	var pName = document.querySelector('.PName').value;
	var phone = document.querySelector('.Phone').value;
	var dateBook = document.querySelector('.tcal').value;
	var timeBook = document.querySelector('.time').value;
	var box = document.querySelector('.list_field');
	
	//Проверка на заполненность формы
	if (book == "Выберите кофейню")
	{
		alert("Выберите адрес");
		emptyAddress.classList.add('empty'); 
		return;
	}
	if (pName == "")
	{
		alert("Укажите имя");
		emptyName.classList.add('empty');
		return;
	}
	if (phone == "")
	{
		alert("Укажите номер телефона");
		emptyPhone.classList.add('empty');
		return;
	}
	if (dateBook=="")
	{
		alert("Ведите дату брони");
		emptyDate.classList.add('empty');
		return;
	}
	if (timeBook == "")
	{
		alert("Ведите время брони");
		emptyTime.classList.add('empty');
		return;
	}
	
	
	emptyName.classList.remove('empty');
	emptyPhone.classList.remove('empty');
	emptyAddress.classList.remove('empty');
	emptyDate.classList.remove('empty');
	emptyTime.classList.remove('empty');
	
	
	var newBook = document.createElement('div');
	newBook.classList.add('item');
	
	
	var pAdd = document.createElement('p');
	pAdd.classList.add('addkey'+counter);
	var pPerson = document.createElement('p');
	pPerson.classList.add('personkey' + counter);
	var pTime = document.createElement('p');
	pTime.classList.add('timekey'+counter);
	pAdd.textContent=(book);
	pPerson.textContent = (pName + ' ' + phone);
	pTime.textContent=(dateBook+" "+timeBook);
	
	newBook.appendChild(pTime);
	newBook.appendChild(pPerson)
	newBook.appendChild(pAdd);
	box.appendChild(newBook);
	
	
	localStorage.setItem("addkey"+counter, pAdd.textContent);
	localStorage.setItem("personkey"+counter, pPerson.textContent);
	localStorage.setItem("timekey"+counter, pTime.textContent );
	
	
	counter++;
}

// Кнопка добавления
var btn_add_book = document.querySelector('.input-button');
btn_add_book.addEventListener('click', addBook);


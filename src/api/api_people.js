export const api_people = {

  // ========================================================

  // Компоненты для загрузки

  components: {
    'Header': true,
    'Body': true,
    'Footer': true},

  // ========================================================
  
  // CallBack при нажатии на элемент списка - 
  // в аргумент передатется объект со всеми полями
  
  callback: function(arg) {
                  return console.log(arg)},

  // ========================================================

  // наименования полей, которые необходимо вывести в список
  // по умолчанию сортировка идет по полю lastName

  columns: {
          name:'имя',
          secondName:'Отчество',
          lastName:'фамилия',
          age: 'возраст'
        },         

  // ========================================================

  // отоборажение данных 
  // для табличной формы установить true / для строчной - false
  
  table: true,      

}

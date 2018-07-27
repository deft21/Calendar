
const ButtonNext = document.getElementById('next');
const ButtonLast = document.getElementById('last');

var i=new Date().getMonth();
var MonthList=['Январь','Февраль','Март','Апрель','Май',"Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

function today(){
      var i=new Date().getMonth();
      toMonth = MonthList[i];
      document.getElementById('output').value = toMonth;
      createCalendar("calendar", new Date().getFullYear(), i)
      console.log(i);
      console.log(toMonth);
      
ButtonNext.onclick = function next(){
    i++;
    document.getElementById('output').value = MonthList[i];
    console.log(i);
    createCalendar("calendar", new Date().getFullYear(),i);
    if (i==11) i=-1
  }
ButtonLast.onclick = function last(){
        i--;
        document.getElementById('output').value = MonthList[i];
        createCalendar("calendar", new Date().getFullYear(), i)
        console.log(i); 
        if (i==0) i=12;
  }
    }

window.onload = today();


function getDay(date) { 
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
    }

function createCalendar(id, year, month) {
      let elem = document.getElementById('calendar');
      console.log(elem);

      var d = new Date(year, month); 
      console.log(d);

      var table = '<table><tr><th>понедельник</th><th>вторник</th><th>среда</th><th>четверг</th><th>пятница</th><th>суббота</th><th>воскресенье</th></tr><tr>';

      for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }
      while (d.getMonth() == month) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { 
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';

      elem.innerHTML = table;
    }

  
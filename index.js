var bday_span = document.getElementById('bday_selector');

var today = new Date();
var set_M = today.getMonth() + 1;
var set_D = today.getDate();
var today_Y = today.getFullYear();
var set_Y = today_Y - 25;
var month_arr = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var months, days, years, bday_html;

// Setup Months
months = '<select name="month">';
for (let i=0; i<=12; i++) {
  months += '<option value="' + i;
  months += i == set_M ? '" selected>' : '">';
  months += month_arr[i] + '</option>';
}
months += '</select>';

// Setup Dates
days = '<select name="date"><option value="0">Day</option>';
for (let i=1; i<=31; i++) {
  days += '<option value="' + i;
  days += i == set_D ? '" selected>' : '">';
  days += i + '</option>';
}
days += '</select>';

// Setup Years
years = '<select name="year"><option value="0">Year</option>';
for (let i=today_Y; i>today_Y-100; i--) {
  years += '<option value="' + i;
  years += i == set_Y ? '" selected>' : '">';
  years += i + '</option>';
}
years += '</select>';
  
bday_html = months + days + years;
bday_span.innerHTML = bday_html;
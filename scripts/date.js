let today = new Date();
let date = String(today.getDate())
let month = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(today)
let day = new Intl.DateTimeFormat('en-US',{ weekday: 'long' }).format(today)
let year = today.getFullYear();

let displayDate = `${day} ${month} ${date}, ${year}`;

document.getElementById("today-date").innerHTML = displayDate
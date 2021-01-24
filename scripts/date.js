const today = new Date();
const date = String(today.getDate())
const month = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(today)
const day = new Intl.DateTimeFormat('en-US',{ weekday: 'long' }).format(today)
const year = today.getFullYear();

const displayDate = `${day} ${month} ${date}, ${year}`;

document.getElementById("today-date").innerHTML = `<h3>${displayDate}</h3>`
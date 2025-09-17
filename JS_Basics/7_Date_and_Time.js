//Date and Time

let date = new Date();
console.log("");
console.log(date); // 2025-01-21T06:59:33.095Z
console.log(date.toString()); // Tue Jan 21 2025 12:29:33 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // Tue Jan 21 2025
console.log(date.toTimeString()); // 12:29:33 GMT+0530 (India Standard Time)
console.log(date.toUTCString()); // Tue, 21 Jan 2025 12:29:33 GMT
console.log(date.toISOString()); // 2025-01-21T06:59:33.095Z
console.log(date.toLocaleString()); // 21/1/2025, 12:29:33 AM
console.log(date.toLocaleDateString()); // 21/1/2025
console.log(date.toLocaleTimeString()); // 12:29:33 AM

console.log(date.now()); // current timestamp
console.log(date.getTime()); // time
console.log(date.getFullYear()); // year
console.log(date.getMonth()); // month
console.log(date.getDate()); // date
console.log(date.getDay()); // day
console.log(date.getHours()); // hours
console.log(date.getMinutes()); // minutes

// console.log(typeof date); // object

let myDate = new Date(2006, 3, 6 , 0, 0, 0, 0); // yy, mm, dd, hh, mm, ss, ms format
let myDate1 = new Date("2006-04-06"); // yy-mm-dd format
let myDate2 = new Date("04-06-2006"); // mm-dd-yy format
let myDate3 = new Date("2006/04/06"); // yy/mm/dd format
let myDate4 = new Date("2006-04-06 00:00:00"); // yy-mm-dd hh:mm:ss format

console.log(`\n${myDate.toString()}\n`); // Thu Apr 06 2006 00:00:00 GMT+0530 (India Standard Time)
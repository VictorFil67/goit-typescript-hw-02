/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// day:'Su'|'Mo'|'Tu'|'We'|'Th'|'Fr'|'Sa'
enum Days {
  Su = "SU",
  Mo = "MO",
  Tu = "TU",
  We = "WE",
  Th = "TH",
  Fr = "FR",
  Sa = "SA",
}
function isWeekend(day: Days): boolean {
  if (day === Days.Su || day === Days.Sa) {
    return true;
  } else {
    return false;
  }
}
console.log(isWeekend(Days.Sa));

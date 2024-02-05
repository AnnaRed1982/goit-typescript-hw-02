/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

function isWeekend(day: WeekDay): boolean {
  if (day === WeekDay.Sun || day === WeekDay.Sat) {
    return true;
  }
  return false;
}

console.log("isWeekend", isWeekend(WeekDay.Fri));
console.log("isWeekend", isWeekend(WeekDay.Sat));
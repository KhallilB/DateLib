class D {
  constructor(...args) {
    this.date = new Date(...args);
  }

  year() {
    return this.date.getFullYear();
  }

  month() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const thisMonth = months[this.date.getMonth()];
    return thisMonth;
  }

  day() {
    return this.date.getDate();
  }

  hour() {
    return this.date.getHours();
  }

  min() {
    return this.date.getMinutes();
  }

  sec() {
    return this.date.getSeconds();
  }

  format(form = 'Y M D') {
    const code = {
      Y: this.year,
      y: String(this.year).slice(2, 4),
      M: this.month,
      m: this.month.slice(0, 3),
      D: this.day < 10 ? '0' + this.day : this.day,
      d: this.day,
      H: this.hour < 10 ? '0' + this.hour : this.hour,
      h: this.hour,
      I: this.minute < 10 ? '0' + this.minute : this.minute,
      i: this.minute,
      S: this.second < 10 ? '0' + this.second : this.second,
      s: this.second
    };
    return form
      .split('')
      .map(char => (char in swaps ? swaps[char] : char))
      .join('');
  }

  when() {
    const currentDate = new Date();
    const yearDifference = currentDate.getFullYear() - this.year();
    const monthDifference = currentDate.getMonth() - this.getMonth();
    const dayDifference = currentDate.getDay() - this.day();
    if (this.date < currentDate) {
      return `Year difference: ${yearDifference}, Month Difference: ${monthDifference}, Day Difference ${dayDifference}`;
    }
    return `This date is: ${Math.abs(yearDifference)} years, ${Math.abs(
      monthDifference
    )} months, and ${Math.abs(dayDifference)} diffrent thn the original date`;
  }
}

module.exports = D;

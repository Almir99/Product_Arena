function isToday(date, today) {
  let start = new Date(today);
  start.setUTCHours(0, 0, 0, 0);

  let end = new Date(today);
  end.setUTCHours(23, 59, 59, 999);

  start = start.toISOString();
  end = end.toISOString();

  return start <= date && end >= date;
}

module.exports = { isToday };

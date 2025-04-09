// import TimeAgo from "javascript-time-ago";
// import th from "javascript-time-ago/locale/th";

// TimeAgo.addLocale(th);
// const timeAgo = new TimeAgo("th-TH");

// const formatTimeAgo = (date) => timeAgo.format(new Date(date), "mini-now");
// export default formatTimeAgo;

import TimeAgo from "javascript-time-ago";
import th from "javascript-time-ago/locale/th";
import { DateTime } from "luxon";

TimeAgo.addLocale(th);
const timeAgo = new TimeAgo("th-TH");

const formatTimeAgo = (dateStr) => {
  // รองรับฟอร์แมต MySQL: '2025-04-09 08:39:17.542'
  const dt = DateTime.fromFormat(dateStr, "yyyy-MM-dd HH:mm:ss.SSS", {
    zone: "Asia/Bangkok", // แปลงเป็นเวลาของไทย
  });

  // ใช้ .toJSDate() เพื่อส่งให้ timeAgo แสดงผล
  return timeAgo.format(dt.toJSDate(), "mini-now");
};

export default formatTimeAgo;

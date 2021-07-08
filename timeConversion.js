


/**
 * Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * Example
 * s = "12:01:00PM"
 * Return '12:01:00'
 * s = '12:01:00AM'
 * Return '00:01:00'
 * @param {String} s 
 * @returns 
 */

function timeConversion(s) {
    // Write your code here
    let splitTime = s.split(":");
    if (splitTime[splitTime.length - 1].includes("AM")) {
        if (splitTime[0] === "12") {
            splitTime[0] = "00";
        }
    }else{
        if (splitTime[0] !== "12") {
            splitTime[0] = (Number(splitTime[0]) + 12).toString();
        }
    }
    
    return splitTime.join(":").replace("AM", "").replace("PM", "");

}


console.log(timeConversion("07:05:45PM"))
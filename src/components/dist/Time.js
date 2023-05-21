"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dayjs_1 = require("@utils/dayjs");
var now = function () { return dayjs_1.dayjs().tz(); };
var events = {
    christmas: [25, 12],
    newYear: [1, 1],
    birthday: [12, 29]
};
var Time = function () {
    var _a = react_1.useState(now()), date = _a[0], setDate = _a[1];
    var currentEvent = Object.entries(events)
        .filter(function (entry) { return entry[1][0] === date.date() && entry[1][1] === date.month() + 1; })
        .flat()[0];
    react_1.useEffect(function () {
        var timer = setInterval(function () { return setDate(now()); }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return (React.createElement("p", { className: "inline" },
        date.format("MMMM Do, YYYY • hh:mm:ss A"),
        " ",
        currentEvent && (React.createElement("span", { className: "font-bold" },
            "\u2014",
            " ",
            {
                christmas: "Merry Christmas!",
                newYear: "Happy New Year!",
                birthday: "Happy Birthday to me!"
            }[currentEvent]))));
};
exports["default"] = Time;

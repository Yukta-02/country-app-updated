import Link from "next/link";
import React from "react";

const CountryListItem = ({ country }) => {
  console.log("country", country);
  // const getDateTimeInTimeZone = (timeZone) => {
  //   const dateTimeInTimeZone = moment()
  //     .tz(timeZone)
  //     .format("DD MMM YYYY, HH:mm");
  //   return dateTimeInTimeZone;
  // };
  const getDateTimeInTimeZone = (timezone) => {
    var currentTime = new Date();

    var offsetMinutes = currentTime.getTimezoneOffset();

    var utcOffset = timezone.replace("UTC", "").trim();

    var desiredOffsetMinutes =
      parseInt(utcOffset.split(":")[0]) * 60 +
      parseInt(utcOffset.split(":")[1]);

    var totalOffsetMinutes = offsetMinutes + desiredOffsetMinutes;

    if (isNaN(totalOffsetMinutes)) {
      return "No time available";
    } else {
      var offsetMilliseconds = totalOffsetMinutes * 60 * 1000;

      var convertedTime = new Date(currentTime.getTime() + offsetMilliseconds);

      // Extract the date, month, and year from the converted time

      var convertedDate = convertedTime.getDate();

      var convertedMonthIndex = convertedTime.getMonth();

      var convertedYear = convertedTime.getFullYear();

      // Format the date with "th" or "st" suffix

      var dateSuffix = getNumberWithSuffix(convertedDate);

      var formattedDate = convertedDate + dateSuffix;

      // Get the month name

      var monthNames = [
        "January",

        "February",

        "March",

        "April",

        "May",

        "June",

        "July",

        "August",

        "September",

        "October",

        "November",

        "December",
      ];

      var convertedMonth = monthNames[convertedMonthIndex];

      // Extract the hour and minute from the converted time

      var convertedHour = ("0" + convertedTime.getHours()).slice(-2);

      var convertedMinute = ("0" + convertedTime.getMinutes()).slice(-2);

      // Display the converted date and time in the desired format

      var convertedDateTime =
        formattedDate +
        " " +
        convertedMonth +
        " " +
        convertedYear +
        ", " +
        convertedHour +
        ":" +
        convertedMinute;

      return convertedDateTime;

      // Helper function to get the suffix for the date

      function getNumberWithSuffix(number) {
        var suffix = "th";

        if (number === 1 || number === 21 || number === 31) {
          suffix = "st";
        } else if (number === 2 || number === 22) {
          suffix = "nd";
        } else if (number === 3 || number === 23) {
          suffix = "rd";
        }

        return suffix;
      }
    }
  };
  return (
    <div className="box">
      <div className="img-box">
        <img
          src={country.flags.svg}
          className="img-fluid image-thumbnail"
          alt=""
        />
      </div>

      <div className="country-info">
        <h6>{country?.name?.common}</h6>
        <p>
          Currencies :
          {country?.currencies
            ? Object.values(country.currencies)[0].name
            : "-"}
        </p>
        {/* <p>Current date and time : {`${formattedDateTime}`}</p> */}
        <p>
          Current date and time: {getDateTimeInTimeZone(country.timezones[0])}
        </p>{" "}
        {/* Use the first time zone in the 'timezones' array */}
        {/* ... */}
        <button className="showmapbtn">
          <Link
            href={country.maps.googleMaps}
            target="_blank"
            className="showfont"
          >
            Show Map
          </Link>
        </button>
        <button className="showmapbtn">
          <Link
            href={`/details/${country?.cca3}`}
            target="_blank"
            className="showfont"
          >
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CountryListItem;

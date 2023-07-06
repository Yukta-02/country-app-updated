import moment from "moment-timezone";
import Link from "next/link";
import React from "react";

const CountryListItem = ({ country }) => {
  console.log("country", country);
  const getDateTimeInTimeZone = (timeZone) => {
    const dateTimeInTimeZone = moment()
      .tz(timeZone)
      .format("DD MMM YYYY, HH:mm");
    return dateTimeInTimeZone;
  };
  return (
    <div className="box">
      <div className="img-box">
        <img
          src={country.flags.svg}
          className="img_fluid image_thumbnail"
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
            href={`/${country?.name?.common}/details`}
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


import React from "react";

const CountryListItem = ({ country }) => {
  return (
    <div className="box">
      <div className="img-box">
        <img src={country.flags.svg} alt="" />
      </div>
      <div className="country-info">
        <h6>{country?.name?.common}</h6>
        <p>
          Currencies:{" "}
          {country?.currencies ? Object.values(country.currencies).join(", ") : "-"}
        </p>
        <p>Current date and time: {getDateTimeInTimeZone(country.timezones[0])}</p>
        <button className="showmapbtn">
          <Link href={country.maps.googleMaps} target="_blank" className="showfont">
            Show Map
          </Link>
        </button>
        <button className="showmapbtn">
          <Link href={`/${country?.name?.common}/details`} target="_blank" className="showfont">
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CountryListItem;

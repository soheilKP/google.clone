"use client";

import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United State");
  useEffect(() => {
    fetch(
      `https://extrem-ip-lookup.com/json/?Key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
};

export default CountryLookup;

import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [cityName, setcityName] = useState("");
  const [data, setdata] = useState({});

  const searchINput = (e) => {
    setcityName(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1753cf9624f297aac8cd4fac0403711b`)
    // const data = await res.json()
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1753cf9624f297aac8cd4fac0403711b&units=metric`
    );
    setdata(res.data);
  };

  const getEmoji = (temp) => {
    if (temp <= 0) return "🥶❄️";
    if (temp <= 5) return "❄️";
    if (temp <= 12) return "🌥️";
    if (temp <= 18) return "🌤️";
    if (temp <= 24) return "☀️";
    if (temp <= 30) return "🌞";
    if (temp <= 35) return "🥵";
    if (temp <= 40) return "🔥";
  };

  const getColor = (temp) => {
    if (temp <= 0) return "#00BFFF";
    if (temp <= 5) return "#4682B4";
    if (temp <= 12) return "#778899";
    if (temp <= 18) return "#ADD8E6";
    if (temp <= 24) return "#FFD700";
    if (temp <= 30) return "#FFA500";
    if (temp <= 35) return "#FF4500";
    if (temp <= 40) return "#DC143C";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div
        className={`border rounded-2xl border-gray-400 w-1/3 h-96 p-10 space-y-4`}
        style={{ background: getColor(data?.main?.temp) }}
      >
        <form
          onSubmit={handleSearch}
          className="flex gap-5 justify-center items-center"
        >
          <TextField
            value={cityName}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={searchINput}
          />
          <Button type="submit" variant="contained">
            Default
          </Button>
        </form>
        <div className="text-6xl">{getEmoji(data?.main?.temp)}</div>
        <div className="">
          <div>
            <h2>Weather: {data?.weather?.[0]?.description}</h2>
          </div>
          <div>
            <p>Tempeature: {data?.main?.temp}</p>
          </div>
          <div>
            <p>Wind: {data?.wind?.speed}</p>
          </div>
          <div>
            <p>Huminity: {data?.main?.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

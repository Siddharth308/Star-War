import React from "react";
import logo from "./star-wars-logo.png";
import { useDebounce, useFetchData } from "./CustomHooks";
import { Link, useHistory } from "react-router-dom";
import "./index.css";
import Person from "../Person";

function HomePage() {
  const [query, setQuery] = React.useState("");
  const [id, setId] = React.useState("");
  const { debounceQuery } = useDebounce(query, 2000);

  const { data, isLoading, isError } = useFetchData(
    `https://swapi.dev/api/people/?search=${debounceQuery || "masai"} `
  );
  const history = useHistory();
  const handleClick = () => {
    let arr = data[0].url.split("/");
    console.log(arr);
    console.log(arr[arr.length - 2]);
    setId(arr[arr.length - 2]);
    history.push(`/person/${query}`);
  };
  return (
    <>
      <div>
        <div className="logo">
          <img src={logo} alt="Star Wars Logo" />
        </div>

        <input
          className="search-input"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          list="cars"
        />

        <datalist id="cars">
          {data?.map((i) => (
            <option style={{ color: "white" }}>{i.name}</option>
          ))}
        </datalist>
        {isLoading ? (
          <i class="fa fa-spinner search" aria-hidden="true"></i>
        ) : (
          <i
            onClick={handleClick}
            class="fa fa-search search"
            aria-hidden="true"
          ></i>
        )}
      </div>
    </>
  );
}

export default HomePage;

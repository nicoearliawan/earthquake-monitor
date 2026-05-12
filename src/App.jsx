import { useEffect, useState } from "react";
import TableList from "./components/TableList"
import { Spinner } from "flowbite-react";
import FilterComp from "./components/FilterComp";

export default function App() {
  const [earthquake, setEarthquake] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  function updateSearchValue(value) {
    // Simpan value dari prop updateSearchValue dari filtercomp.jsx ke state
    setSearch(value);
  }

  function sortEarthquake(type) {
    // copy data dari state untuk dirposes pengurutan fungsi js
    const newEarthquakes = [...earthquake];
    if (type == "magnitude ascending") {
      // fungsi JS untuk mengurutkan nilai number: .sort(-)
      newEarthquakes.sort((a, b) => a.properties.mag - b.properties.mag);
    } else if (type == "magnitude descending") {
      newEarthquakes.sort((a, b) => b.properties.mag - a.properties.mag);
    } else if (type == "time ascending") {
      newEarthquakes.sort((a, b) => new Date(a.properties.time) - new Date(b.properties.time));
    } else if (type == "time descending") {
      newEarthquakes.sort((a, b) => new Date(b.properties.time) - new Date(a.properties.time));
    }
    //simpan hasil pengurutan ke state
    setEarthquake(newEarthquakes);
  }




  async function getEarthquake() {
    const url = "https://api.terraquakeapi.com/v1/earthquakes/recent";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setEarthquake(result.payload);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getEarthquake();
  }, []);

  if (loading) {
    return (
      <div className="block mx-auto mt-75 w-auto text-center ">
        <Spinner aria-label="Default status example" />     
        Loading...
      </div>
    )
  }

  const filteredEarthquake = earthquake.filter((item) =>
  item.properties.place.toLowerCase().includes(search.toLowerCase())
);

  return (
    <>
      <div className="mx-15 my-5">
        <FilterComp updateSearchValue={updateSearchValue} sortEarthquake={sortEarthquake} />
        <TableList earthquakeData={filteredEarthquake} />
      </div>
    </>
  )
}


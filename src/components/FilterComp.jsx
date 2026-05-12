import { TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function FilterComp({ updateSearchValue, sortEarthquake }) {

    return (
        <>
            <div className="flex mx-10">
                <div className="w-4xl">
                    <TextInput icon={IoIosSearch} placeholder="Search by location" onKeyUp={(e) => updateSearchValue(e.target.value)} />
                </div>
                <Dropdown label="Sort Data" className="ms-3 w-sm" color="alternative" dismissOnClick={false}>
                    <DropdownItem onClick={() => sortEarthquake("magnitude descending")}>Magnitude Largest</DropdownItem>
                    <DropdownItem onClick={() => sortEarthquake("magnitude ascending")}>Magnitude Smallest</DropdownItem>
                    <DropdownItem onClick={() => sortEarthquake("time descending")}>Newest</DropdownItem>
                    <DropdownItem onClick={() => sortEarthquake("time ascending")}>Oldest</DropdownItem>
                </Dropdown>
            </div></>
    )
}
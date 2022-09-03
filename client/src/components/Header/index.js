import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faHotel, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

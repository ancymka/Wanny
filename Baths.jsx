import React from "react";

import Bath from "../Components/Bath/Bath";


const Baths = props => {

    const renderBath = () => {
        let baths = [];
        baths.push(<Bath index={1} />)

        return <div>{baths}</div>;
    }

    return <div>{renderBath()} </div>
}

export default Baths;

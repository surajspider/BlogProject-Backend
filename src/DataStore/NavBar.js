import React, { createContext, useState } from 'react';

export var navstate = createContext();

function NavBar(props) {
    var [nav, isvisible] = useState(true);
    return (
        <navstate.Provider value={[nav, isvisible]}>
            {props.children}
        </navstate.Provider>
    )
}

export default NavBar
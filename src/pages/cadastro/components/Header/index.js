import React from 'react';

function Header( {header} ){   
    const style = {
        color: '#414141',
        marginBottom: "35px",
        marginTop: "-5px"
    }
    return(
        <h1 style={style}>{header}</h1>
    );
}

export default Header;
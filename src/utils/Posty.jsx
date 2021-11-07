import React, { useState, useEffect } from "react";

const Posty = async (json) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
    };
    try {
        const fetchResponse = await fetch(`http://localhost:3333/benix`, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }    

}

export default Posty
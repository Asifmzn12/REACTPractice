import React from "react";

function KeysandList() {
    const user = [
        { id: 1, name: "asif" },
        { id: 2, name: "mohit" },
        { id: 3, name: " mukul" }
    ]


    return (
        <div>
            <ul>
                {user.map((name) =>
                    <li key={name.id}>{name.name}</li>
    
     ) }
            </ul>



        </div>
    )
}

export default KeysandList;

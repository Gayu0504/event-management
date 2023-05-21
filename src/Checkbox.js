import React from "react";
import { useState } from "react";

function Checkbox() {
    let [isChecked, setIsChecked] = useState(false);
    let [name, setName] = useState(" ");

    let onChange = (e) => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            setName(e.target.value)
        }
        else {
            setName(' ')
        }
    };
    return (
        <div className="App">
            <div>
                <input type="checkbox" value="hi" checked={isChecked} onClick={onChange} />hi
            </div>
            <div>
                Name is:-{name}<br />
                Checkbox is{isChecked ? "checked " : "un-checked"}.
            </div>
        </div>
    );
}

export default Checkbox;
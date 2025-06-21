import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";


function AutoCompleteClientSelect() {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }
    ];

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = useState(null);

    return (
        <div className="pr-2" variant="primary">
            <Autocomplete
                {...defaultProps}
                id="Select-Client"
                disableCloseOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="Select Client" variant="outlined" />
                )}

            />
        </div>
    )
}

export default AutoCompleteClientSelect;
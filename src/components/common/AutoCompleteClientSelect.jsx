import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@mui/material";


function AutoCompleteClientSelect({ onclientSelect }) {
    const [appointments, setAppointments] = useState([]);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedClient, setSelectedClient] = useState(null);

    //fetch Bookings
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setError("User not logged in");
            setLoading(false);
            return;
        }

        const { nameid } = jwtDecode(token);
        const userId = parseInt(nameid);

        const url = `${API_BASE_URL}/bookings/stylist/${userId}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch bookings");
                return res.json();
            })
            .then((data) => {
                setAppointments(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [API_BASE_URL]);

    return (
        <div className="pr-2" variant="primary">
            <Autocomplete
                options={appointments}
                getOptionLabel={(option) => option.clientName}
                value={selectedClient}
                onChange={(event, newValue) => {
                    setSelectedClient(newValue);
                    if (newValue && typeof onclientSelect === "function") {
                        onclientSelect(newValue.clientId);
                    }
                }}
                disableCloseOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="Select Client" variant="outlined" />
                )}
            />
        </div>
    )
}

export default AutoCompleteClientSelect;
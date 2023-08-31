import React from "react";
import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    async function handleClick() {
        console.log(token)
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await response.json()
            setSuccessMessage(data.message)
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Authenticate!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            {/* {data && <p>{data.username}</p>} */}
            <button onClick={handleClick}>
                Authenticate token
            </button>
        </>
    )
}
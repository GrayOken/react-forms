import React from "react";
import { useState } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({ username, password })
            })
            const data = await response.json()
            setToken(data.token)
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
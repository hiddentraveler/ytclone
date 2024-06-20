import { useState } from "react"

export default function LogIn() {
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")

	function handleSubmit(e) {
		e.preventDefault()
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">email:</label>
				<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

				<label htmlFor="password">password:</label>
				<input type="password" id="password" value={pass} onChange={(e) => setPass(e.target.value)} /> <br />

				<button>Submit</button>
			</form>
		</>
	)
}

import { useState } from "react";

export default function Upload() {
	const [title, setTitle] = useState("");
	const [file, setFile] = useState(null);
	const user = JSON.parse(localStorage.getItem('user'))
	if (!user) {
		location.replace('/login')
	}
	async function uploadFile() {
		if (!file) {
			return;
		}

		const forData = new FormData();
		forData.append('file', file);
		forData.append('title', title);
		forData.append('username', `${user.username}`);
		forData.append('userid', `${user.id}`);

		const url = "http://localhost:8000/upload";

		const options = {
			mode: "cors",
			method: "POST",
			body: forData,
			headers: {
				'content-length': `${file.size}`,
			},
		};

		try {

			const response = await fetch(url, options);
			const result = await response.json()
			console.log(result);
		} catch (e) {
			console.log(e);
		}
	}

	function handleFileChange(e) {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	}

	return (
		<>
			<label htmlFor="title">Title: </label>
			<input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
			<label htmlFor="file">File: </label>
			<input type="file" id="file" onChange={handleFileChange} />
			<button onClick={uploadFile}>Upload</button>
		</>
	)
}

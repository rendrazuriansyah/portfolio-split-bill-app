import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("https://i.pravatar.cc/48");

	return (
		<form
			action=""
			className="form-add-friend"
		>
			<label htmlFor="">🙍🏻Nama</label>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label htmlFor="">📸Foto</label>
			<input
				type="text"
				value={photo}
				onChange={(e) => setPhoto(e.target.value)}
			/>

			<button className="button">Tambah</button>
		</form>
	);
}

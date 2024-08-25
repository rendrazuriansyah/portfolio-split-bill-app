import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("https://i.pravatar.cc/48?u=a042581f4e");

	function handleSubmit(e) {
		e.preventDefault();

		if (!name || !photo) return;

		const id = Math.floor(1000000 + Math.random() * 90000000);
		const newFriend = {
			id,
			name,
			photo: `${photo}${id}d`,
			balance: 0,
		};
		onAddFriend(newFriend);
		setName("");
		setPhoto("https://i.pravatar.cc/48?u=a042581f4e");
	}

	return (
		<form
			action=""
			className="form-add-friend"
			onSubmit={handleSubmit}
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

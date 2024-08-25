import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
	{
		id: 123456,
		name: "Alice",
		photo: "https://i.pravatar.cc/48?u=a042581f4e29026707d",
		balance: 0,
	},
	{
		id: 654321,
		name: "Bob",
		photo: "https://i.pravatar.cc/48?u=a042581f4e29026706d",
		balance: 10,
	},
	{
		id: 987654,
		name: "Charlie",
		photo: "https://i.pravatar.cc/48?u=a042581f4e29026705d",
		balance: -10,
	},
];

export default function App() {
	const [friends, setFriends] = useState(initialFriends);
	const [showAddFriend, setShowAddFriend] = useState(false);

	function handleShowAddFriend() {
		setShowAddFriend((showAddFriend) => !showAddFriend);
	}

	function handleAddFriend(friend) {
		setFriends((friends) => [...friends, friend]);
	}

	return (
		<div className="app">
			<div className="sidebar">
				<FriendList friends={friends} />
				{showAddFriend && (
					<FormAddFriend onAddFriend={handleAddFriend} />
				)}
				<button
					className="button"
					onClick={handleShowAddFriend}
				>
					{showAddFriend ? "Tutup" : "Tambah Teman"}
				</button>
			</div>
			<FormSplitBill />
		</div>
	);
}

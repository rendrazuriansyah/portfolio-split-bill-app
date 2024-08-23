import FriendList from "./components/FriendList";

const initialFriends = [
	{
		id: 123456,
		name: "Alice",
		image: "https://i.pravatar.cc/48?u=a042581f4e29026707d",
		balance: 0,
	},
	{
		id: 654321,
		name: "Bob",
		image: "https://i.pravatar.cc/48?u=a042581f4e29026706d",
		balance: 10,
	},
	{
		id: 987654,
		name: "Charlie",
		image: "https://i.pravatar.cc/48?u=a042581f4e29026705d",
		balance: -10,
	},
];

export default function App() {
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList friends={initialFriends} />
			</div>
		</div>
	);
}

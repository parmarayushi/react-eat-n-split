import { useState } from "react";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showForm, setShowForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowFriend = () => {
    setShowForm((show) => !show);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowForm(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showForm && <AddFriendForm onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowFriend}>
          {showForm ? "Close" : "Add friend"}
        </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const handleShowFriend = () => {
    setShowForm((show) => !show);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showForm && <AddFriendForm />}

        <Button onClick={handleShowFriend}>
          {showForm ? "Close" : "Add friend"}
        </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client";

const socket = socketIO("http://localhost:4000");

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<Home socket={socket} />} />
					<Route path="/chat" element={<ChatPage socket={socket} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

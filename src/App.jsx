import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
	const [gitUser, setUser] = useState("");
	const [gitUserRepos, setUserRepos] = useState("");

	const searchUser = async (username) => {
		const response = await fetch(`https://api.github.com/users/${username}`);
		const data = await response.json();
		console.log(data);

		// Get necessary data only
		const user = {
			id: data.id,
			name: data.name,
			username: data.login,
			userUrl: data.url,
			followers: data.followers,
			following: data.following,
			reposUrl: data.url,
			publicRepos: data.public_repos, // number of public repos
		};
		console.log("user", user);

		setUser(user);
	};

	const getUserRepos = () => {};
	console.log("gitUser", gitUser);

	return (
		<div className="app-container">
			{/* Header */}
			<div className="flex flex-col items-center justify-center p-6">
				<h1 className="text-[45px]"> git.peek </h1>
				<p className="mt-4">
					{" "}
					Search for any GitbHub user to view their profile and
					repositories{" "}
				</p>
			</div>

			{/* Search Bar */}
			<SearchBar submitSearch={searchUser}></SearchBar>

			{/* Start searching message */}

			{/* User name, full name, git url */}

			{/* num of repos, followers, following */}

			{/* top repos */}
		</div>
	);
}

export default App;

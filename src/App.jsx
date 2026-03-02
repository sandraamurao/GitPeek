import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import StatsRow from "./components/StatsRow";

function App() {
	const [gitUser, setUser] = useState("");
	const [errorRequest, setErrorRequest] = useState(null);
	const [gitUserRepos, setUserRepos] = useState("");

	const searchUser = async (username) => {
		setErrorRequest(null);

		try {
			const response = await fetch(`https://api.github.com/users/${username}`);

			if (!response.ok) {
				throw new Error("User not found");
			}

			const data = await response.json();
			console.log(data);

			// Get necessary data only
			const user = {
				id: data.id,
				avatarUrl: data.avatar_url,
				name: data.name,
				username: data.login,
				userUrl: data.html_url,
				followers: data.followers,
				following: data.following,
				reposUrl: data.url,
				publicRepos: data.public_repos, // number of public repos
			};
			console.log("user", user);

			setUser(user);
		} catch (error) {
			setErrorRequest(error.message);
			setUser(null);
		}
	};

	const getUserRepos = () => {};
	console.log("gitUser", gitUser);

	return (
		<div className="app-container">
			{/* Header */}
			<div className="flex flex-col items-center justify-center p-6">
				<h1 className="text-[45px]"> git.peek </h1>
				<p className="mt-4">
					Search for any GitbHub user to view their profile and
					repositories
				</p>
			</div>

			{/* Search Bar */}
			<SearchBar submitSearch={searchUser}></SearchBar>

			{/* If user not found message */}
			{errorRequest && <div> Are you sure this dude exists? ;/ </div>}

			{gitUser && (
				<div>
					{/* User name, full name, git url (ProfileCard) */}
					<ProfileCard gitUser={gitUser}></ProfileCard>

					{/* num of repos, followers, following (StatsRow) */}
					<StatsRow gitUser={gitUser}></StatsRow>

					{/* top repos */}
				</div>
			)}
		</div>
	);
}

export default App;

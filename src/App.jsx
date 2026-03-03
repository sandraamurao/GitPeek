import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import StatsRow from "./components/StatsRow";
import Repos from "./components/Repos";

function App() {
	const [gitUser, setUser] = useState("");
	const [errorRequest, setErrorRequest] = useState(null);
	const [gitUserRepos, setUserRepos] = useState([]);

	async function searchUser(username) {
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
				reposUrl: data.repos_url,
				publicRepos: data.public_repos, // number of public repos
			};
			console.log("user", user);

			setUser(user);

			// Get User's Repos
			getUserRepos(user.reposUrl);
		} catch (error) {
			setErrorRequest(error.message);
			setUser(null);
		}
	}

	async function getUserRepos(url) {
		let repos = [];
		try {
			const response = await fetch(`${url}?sort=stars&per_page=6`);

			if (!response.ok) {
				throw new Error("Repositories not found");
			}

			const data = await response.json();
			console.log("data", data);

			data.forEach((d) => {
				repos.push({
					id: d.id,
					name: d.name,
					language: d.language,
					description: d.description,
					forks: d.forks,
					starsCount: d.stargazers_count,
					watchersCount: d.watchers_count,
					url: d.html_url,
				});
			});
			setUserRepos(repos);

		} catch (error) {
			console.error(error.message);
		}
	}
	console.log("gitUser", gitUser);

	return (
		<div className="app-container">
			{/* Header */}
			<div className="flex flex-col items-center justify-center p-6">
				<h1 className="text-[45px]"> git.peek </h1>
				<p className="mt-4">
					Search for any GitbHub user to view their profile and repositories
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
					<Repos repos={gitUserRepos}></Repos>
				</div>
			)}
		</div>
	);
}

export default App;

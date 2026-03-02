import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ submitSearch }) {
	const [username, setUsername] = useState("");

	function handleSubmit(event) {
		event.preventDefault();

		submitSearch(username);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="form-container">
				<input
					type="text"
					value={username}
					className="search-input"
					placeholder="Enter a GitHub username..."
                    onChange={(e) => setUsername(e.target.value)}
				/>
				<button type="submit"> search button </button>
			</form>
		</div>
	);
}

export default SearchBar;

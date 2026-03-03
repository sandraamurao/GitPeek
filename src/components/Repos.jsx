import "./Repos.css";
import { Code2, GitFork, Star, Eye } from "lucide-react";

function Repos({ repos }) {
	const langColors = {
		JavaScript: "#e51313",
		TypeScript: "#f8e409",
		Python: "#e58613",
		Rust: "#0e14d0",
		Go: "#d6168c",
		CSS: "#d86771",
		HTML: "#9916d6",
		Java: "#1663d6",
		"C++": "#16ccd6",
		Ruby: "#34e89a",
	};

	return (
		<>
			<h1 className="header"> TOP REPOSITORIES </h1>
			<div className="repo-container">
				{repos.map((r) => (
					<a key={r.id} href={r.url} target="_blank" rel="noreferrer">
						<div className="repo-card">
							<div className="repo-name"> {r.name} </div>
							<div className="text-md"> {r.description} </div>
							<div className="repo-stats">
								{r.language && (
									<div className="text-lg repo-content">
										<Code2 
										size={17} 
										color={langColors[r.language]  || "#ffffff"} 
										strokeWidth={2.5}/> 
										{r.language}
									</div>
								)}
								<div className="repo-content">
									<GitFork size={17} color="#8443c9"/> {r.forks}
								</div>
								<div className="repo-content">
									<Star size={17} color="#ebd806" />
									{r.starsCount}
								</div>
								<div className="repo-content">
									<Eye size={17} color="#dec29a"/> {r.watchersCount}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</>
	);
}

export default Repos;

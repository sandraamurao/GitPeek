import "./StatsRow.css";
import { BookMarked, Users, UserCheck } from "lucide-react";

function StatsRow({ gitUser }) {
	return (
		<div className="stats-container">
			<div className="stat-card border-[#dc4d15] shadow-[0_0_10px_#e98e43]">
				<BookMarked size={25} color="#e98e43" />
				<span className="text-lg"> {gitUser.publicRepos} </span>
				<span className="text-lg">Repositories</span>
			</div>
			<div className="stat-card border-[#ffff03] shadow-[0_0_10px_#ecd862]">
				<Users size={25} color="#ecd862"/> 
				<span className="text-lg"> {gitUser.followers} </span>
				<span className="text-lg">Followers</span>
			</div>
			<div className="stat-card border-[#7d09f2] shadow-[0_0_10px_#a360e7]">
				<UserCheck size={25} color="#a360e7"/> 
				<span className="text-lg"> {gitUser.following} </span>
				<span className="text-lg"> Following </span>
			</div>
		</div>
	);
}

export default StatsRow;

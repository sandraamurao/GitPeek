import "./ProfileCard.css";
import { ExternalLink } from "lucide-react";

function ProfileCard({ gitUser }) {
	return (
		<div className="profile-container">
			<img src={gitUser.avatarUrl} className="avatar-img" />
			<div className="flex flex-col">
				<div className="text-3xl">
					{gitUser.name ? (
						<h1> {gitUser.name} </h1>
					) : (
						<h1> {gitUser.username} </h1>
					)}
				</div>
				<div className="text-base mb-8"> @{gitUser.username} </div>
				<a
					href={gitUser.userUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="
                    user-url"
				>
					View GitHub <ExternalLink size={20} />
				</a>
			</div>
		</div>
	);
}

export default ProfileCard;

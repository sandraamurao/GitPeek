import "./ProfileCard.css";
import { ExternalLink } from "lucide-react";

function ProfileCard({ gitUser }) {
	return (
		<div className="profile-container ">
			<img src={gitUser.avatarUrl} className="avatar-img" />
			<div className="flex flex-col">
				<div className="profile-name">
					{gitUser.name ? (
						<h1> {gitUser.name} </h1>
					) : (
						<h1> {gitUser.username} </h1>
					)}
				</div>
				<div className="text-base username"> @{gitUser.username} </div>
				<a
					href={gitUser.userUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="
                    user-url text-base max-[350px]:text-sm"
				>
					View GitHub <ExternalLink size={20} className="max-[380px]:w-6"/>
				</a>
			</div>
		</div>
	);
}

export default ProfileCard;

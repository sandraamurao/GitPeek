import "./ProfileCard.css";
import { ExternalLink, MapPin, Building2, Globe } from "lucide-react";

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
				{gitUser.bio && (
					<div className="text-thin text-[#bababa] mb-6">{gitUser.bio}</div>
				)}
				{(gitUser.location || gitUser.company || gitUser.blog) && (
					<div className="flex flex-wrap gap-8 mb-7">
						{/* Location */}
						{gitUser.location && (
							<div className="flex flex-wrap items-center gap-2">
								<MapPin size={16} color="#fa4c69" />
								{gitUser.location}
							</div>
						)}
						{/* Company */}
						{gitUser.company && (
							<div className="flex flex-wrap items-center gap-2">
								<Building2 size={16} color="#eb4cfa" />
								{gitUser.company}
							</div>
						)}
						{/* Personal blog/website */}
						{gitUser.blog && (
							<div className="flex flex-wrap items-center gap-2">
								<Globe size={16} color="#11cb5e" /> {gitUser.blog}
							</div>
						)}
					</div>
				)}
				<a
					href={gitUser.userUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="
                    user-url text-base max-[350px]:text-sm"
				>
					View GitHub <ExternalLink size={20} className="max-[380px]:w-6" />
				</a>
			</div>
		</div>
	);
}

export default ProfileCard;

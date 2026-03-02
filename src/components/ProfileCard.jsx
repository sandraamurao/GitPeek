function ProfileCard({ gitUser }) {
	return (
		<div
			className="flex flex-row items-start gap-8 border max-[500px]:flex-col max-[500px]:items-center p-5">
			<img
				src={gitUser.avatarUrl}
				className="w-32 h-32
                rounded-full
                object-cover
                border-4 border-black
                shadow-lg"
			/>
			<div className="flex flex-col">
				<div className="text-3xl">
					{gitUser.name ? (
						<h1> {gitUser.name} </h1>
					) : (
						<h1> {gitUser.username} </h1>
					)}
				</div>
				<div className="text-base"> @{gitUser.username} </div>
				<a
					href={gitUser.userUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="
                    block
                    mt-6
                    px-4 py-2
                    bg-white text-black
                    rounded-lg
                    hover:opacity-90
                    text-base
                "
				>
					View GitHub
				</a>
			</div>
		</div>
	);
}

export default ProfileCard;

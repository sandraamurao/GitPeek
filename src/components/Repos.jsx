function Repos({ repos }) {
	console.log("1repos", repos);
	return (
		<>
			<h1 className="mt-15 mb-8 text-3xl max-[260px]:text-lg"> TOP REPOSITORIES </h1>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{repos.map((r) => (
					<a key={r.id} href={r.url} target="_blank" rel="noreferrer">
						<div className="w-full border p-6 rounded-lg overflow-auto">
							<div className="text-2xl"> {r.name} </div>
							<div className="text-lg"> {r.description} </div>
							<div className="mt-10 flex flex-row max-[300px]:flex-col gap-5 items-center justify-start">
							    {r.language && <div className="text-lg"> {r.language} </div>} 
								<div> {r.forks} </div>
								<div> {r.starsCount} </div>
								<div> {r.watchersCount} </div>
							</div>
						</div>
					</a>
				))}
			</div>
		</>
	);
}

export default Repos;

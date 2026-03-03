function StatsRow({ gitUser }) {
    return (
        <div className="flex flex-row max-[590px]:flex-wrap items-center justify-center gap-10">
            <div className="w-full border p-8 flex flex-col items-center gap-y-4"> 
                icon
                <span> {gitUser.publicRepos} </span>
                Repositories 
            </div>
            <div className="w-full border p-8 flex flex-col items-center gap-y-4"> 
                icon
                <span> {gitUser.followers} </span>
                Followers 
            </div>
            <div className="w-full border p-8 flex flex-col items-center gap-y-4"> 
                icon
                <span> {gitUser.following} </span>
                Following 
            </div>
        </div>
    )
}

export default StatsRow;
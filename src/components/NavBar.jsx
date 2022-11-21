
export default function NavBar() {
    return(
        <div className="w-screen flex h-20 bg-orangeMenu items-center justify-center space-x-20 font-outfit ">
            <div className="relative group">
                <button className="text-white font-bold tracking-wider">Projects</button>
                <div className="invisible group-hover:visible">
                    <ul className="absolute text-white pt-7">
                        <li>
                            <a className="bg-orangeMenu hover:bg-orange-200 py-2 px-4 block whitespace-nowrap" href="/projects">New Project</a>
                        </li>
                        <li>
                            <a className=" bg-orangeMenu hover:bg-orange-200 py-2 px-4 block whitespace-nowrap" href="#none">Recent</a>
                        </li>
                        <li>
                            <a className=" bg-orangeMenu hover:bg-orange-200 py-2 px-4 block whitespace-nowrap rounded-b" href="#none">All Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative group">
                <button className="text-white font-bold tracking-wider">Teams</button>
                <div className="invisible group-hover:visible">
                    <ul className="absolute text-white pt-7">
                        <li>
                            <a className="bg-orangeMenu hover:bg-orange-200 py-2 px-4 block whitespace-nowrap" href="#none">New Team</a>
                        </li>
                        <li>
                            <a className=" bg-orangeMenu hover:bg-orange-200 py-2 px-4 block whitespace-nowrap" href="#none">Recent</a>
                        </li>
                        <li>
                            <a className=" bg-orangeMenu hover:bg-orange-200 py-2 px-4 block whitespace-nowrap rounded-b" href="#none">All Teams</a>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="text-white font-bold tracking-wider">Calendar</button>
        </div>
    )
}
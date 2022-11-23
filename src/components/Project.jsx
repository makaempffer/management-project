import { useEffect, useState } from "react";


export default function Project() {
    return(
        <div>
            <div className="flex w-full h-10 justify-evenly rounded-br bg-grayCustom">
                <button className="rounded font-roboto">Add Task Panel</button>
                <button className="rounded font-roboto">2</button>
                <button className="rounded font-roboto">3</button>
                <button className="rounded font-roboto">4</button>
            </div>
            <div className="flex space-x-5 p-5">
                <MyComponent />
            </div>
        </div>
    )
}


function MyComponent() {
    const [panels, setPanels] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8090/api/collections/panels/records?page=1&perPage=30')
        .then(response => response.json())
        .then(data => {
            setPanels(data.items)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    return (
        panels.map((panel) =>(
            <div className="w-1/4 h-32 bg-black rounded p-3">
                <p className="text-white" key={panel.id}>{panel.title}</p>
            </div>
        ))
        // <div className="w-1/4 h-32 bg-black rounded p-3">
        //     {panels.map((panel) => (
        //         <p className="text-white" key={panel.id}>{panel.title}</p>
        //     ))}
        // </div>
    )
}
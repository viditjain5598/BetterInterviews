import { Server } from "./config.js";

let getInterviews = async () => {
    const options = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(Server.join('/'), options)
        const json = await response.json();
        console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}


let Index = {
    render: async () => {
        let interviews = await getInterviews()
        let view = `
            <h1> Index </h1>
            <ul>
                ${ interviews.map(interview =>
                        `<li><a href="#/p/${interview.id}">${interview.title}</a></li>`
                    )
                }
            </ul>
        `
    }
}


export default Index;
import * as express from "express"
import * as cors from "cors"
import { connectToDatabase } from "./database/connect-database"


const main = async () => {
    await connectToDatabase();

    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))

    const serverPort = process.env.SERVER_PORT || 5000;
    app.listen(serverPort, () => {
        console.log(`Server listen on port ${serverPort}`)
    })
}

main();
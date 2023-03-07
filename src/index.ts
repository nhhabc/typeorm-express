import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import userRoutes from "../routes/UserRoutes"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    
    // setup express app here
    app.use(bodyParser.json())
    app.use(express.urlencoded({
        extended: true
    }))

    app.use("/api", userRoutes)

    // start express server
    const serverPort = process.env.SERVER_PORT || 5000;

    app.listen(5000, () => {
        console.log(`Server listen on port ${serverPort}`)
    })
}).catch(error => console.log(error))

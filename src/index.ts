import * as express from "express"
import * as cors from "cors"
import authRoutes from "./routes/AuthRoutes"
import apartmentRouter from "./routes/ApartmentRoutes"
import { connectToDatabase } from "./database/connect-database"


const main = async () => {
    await connectToDatabase();

    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))

    app.use("/api", authRoutes)
    app.use("/api", apartmentRouter)

    const serverPort = process.env.SERVER_PORT || 5000;
    app.listen(serverPort, () => {
        console.log(`Server listen on port ${serverPort}`)
    })
}

main();
import {Router} from "express"
import { addEmployee } from "../../controller/employers.js"

const router = Router()

//REGISTER POST
router.post('/addEmployee',addEmployee)

export {router as employeeRouter}
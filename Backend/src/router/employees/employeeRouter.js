import {Router} from "express"
import { addEmployee, getEmployee } from "../../controller/employers.js"

const router = Router()

//REGISTER POST
router.post('/addEmployee',addEmployee)
//Get User 
router.get("/getAllEmployees",getEmployee)



export {router as employeeRouter}
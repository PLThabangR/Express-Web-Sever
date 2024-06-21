import {Router} from "express"
import { addEmployee, getEmployee, updateEmployee } from "../../controller/employers.js"

const router = Router()

//REGISTER POST
router.post('/addEmployee',addEmployee)
//Get User 
router.get("/getAllEmployees",getEmployee)
router.put("/updateEmployees/:id",updateEmployee)



export {router as employeeRouter}
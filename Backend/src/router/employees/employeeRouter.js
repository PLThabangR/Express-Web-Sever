import {Router} from "express"
import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from "../../controller/employers.js"

const router = Router()

//REGISTER POST
router.post('/addEmployee',addEmployee)
//Get User 
router.get("/getAllEmployees",getEmployee)
router.put("/updateEmployees/:id",updateEmployee)
router.delete("/deleteEmployee/:id",deleteEmployee)



export {router as employeeRouter}
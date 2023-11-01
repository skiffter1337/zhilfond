import {instance} from "../../api/common.api";
import {EmployeeType} from "./employeesSlice";

export const employeesApi = {
    getEmployees(queryParams: string[]) {
        const queryString = queryParams.join('&')
        return instance.get<EmployeeType[]>(`users?${queryString}`)
    }
}
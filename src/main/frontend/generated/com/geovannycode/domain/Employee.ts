import type Gender_1 from "./Gender.js";
interface Employee {
    id?: number;
    firstName?: string;
    lastName?: string;
    gender?: Gender_1;
    email?: string;
    phone?: string;
    startDate?: string;
    shiftStartsAt?: string;
    active: boolean;
    description?: string;
}
export default Employee;

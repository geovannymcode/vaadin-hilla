import { _getPropertyModel as _getPropertyModel_1, BooleanModel as BooleanModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Employee_1 from "./Employee.js";
import GenderModel_1 from "./GenderModel.js";
class EmployeeModel<T extends Employee_1 = Employee_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(EmployeeModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, true, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "java.lang.Long" } }));
    }
    get firstName(): StringModel_1 {
        return this[_getPropertyModel_1]("firstName", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get lastName(): StringModel_1 {
        return this[_getPropertyModel_1]("lastName", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get gender(): GenderModel_1 {
        return this[_getPropertyModel_1]("gender", (parent, key) => new GenderModel_1(parent, key, true));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get phone(): StringModel_1 {
        return this[_getPropertyModel_1]("phone", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get startDate(): StringModel_1 {
        return this[_getPropertyModel_1]("startDate", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.time.LocalDate" } }));
    }
    get shiftStartsAt(): StringModel_1 {
        return this[_getPropertyModel_1]("shiftStartsAt", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.time.LocalTime" } }));
    }
    get active(): BooleanModel_1 {
        return this[_getPropertyModel_1]("active", (parent, key) => new BooleanModel_1(parent, key, false, { meta: { javaType: "boolean" } }));
    }
    get description(): StringModel_1 {
        return this[_getPropertyModel_1]("description", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
}
export default EmployeeModel;

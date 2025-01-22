import { AutoForm } from '@vaadin/hilla-react-crud';
import EmployeeModel from 'Frontend/generated/com/geovannycode/domain/EmployeeModel';
import { EmployeeService } from 'Frontend/generated/endpoints';

export default function EmployeeForm() {
    return <AutoForm service={EmployeeService} model={EmployeeModel} />;
}
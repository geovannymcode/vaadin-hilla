import { AutoCrud } from '@vaadin/hilla-react-crud';
import EmployeeModel from 'Frontend/generated/com/geovannycode/domain/EmployeeModel';
import { EmployeeService } from 'Frontend/generated/endpoints';

export default function AutoCrudCrudView() {
    return (
        <AutoCrud service={EmployeeService} model={EmployeeModel} className="h-full" />
    );
}
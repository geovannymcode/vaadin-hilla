import { AutoGrid } from '@vaadin/hilla-react-crud';
import EmployeeModel from 'Frontend/generated/com/geovannycode/domain/EmployeeModel';
import { EmployeeService } from 'Frontend/generated/endpoints';

export default function EmployeeGrid() {
    return <AutoGrid service={EmployeeService} model={EmployeeModel} />;
}
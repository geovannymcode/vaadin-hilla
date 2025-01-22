import { AutoGrid } from '@vaadin/hilla-react-crud';
import EmployeeModel from 'Frontend/generated/com/geovannycode/domain/EmployeeModel';
import { EmployeeService } from 'Frontend/generated/endpoints';

function ActiveRenderer({ item }: { item: EmployeeModel }) {
    const { active } = item;
    const color = active ? 'green' : 'red';
    return <span style={{ fontWeight: 'bold', color }}>{active ? 'Yes' : 'No'}</span>;
}

export default function EmployeeGrid() {
    return (
        <AutoGrid
            service={EmployeeService}
            model={EmployeeModel}
            visibleColumns={['firstName', 'lastName', 'email', 'phone', 'startDate', 'shiftStartsAt', 'description', 'active']}
            columnOptions={{
                active: { renderer: ActiveRenderer },
            }}
        />
    );
}
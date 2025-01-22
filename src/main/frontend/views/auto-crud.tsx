import { AutoCrud } from '@vaadin/hilla-react-crud';
import EmployeeModel from 'Frontend/generated/com/geovannycode/domain/EmployeeModel';
import { EmployeeService } from 'Frontend/generated/endpoints';

function ActiveRenderer({ item }: { item: EmployeeModel }) {
    const { active } = item;
    const color = active ? 'green' : 'red';
    return <span style={{ fontWeight: 'bold', color }}>{active ? 'Yes' : 'No'}</span>;
}

export default function AutoCrudCrudView() {
    return (
        <AutoCrud
            service={EmployeeService}
            model={EmployeeModel}
            className="h-full"
            gridProps={{
                visibleColumns: ['firstName', 'lastName', 'email', 'phone', 'startDate', 'shiftStartsAt', 'description','active'],
                columnOptions: {
                    firstName: { header: 'Name' },
                    active: { renderer: ActiveRenderer },
                },
            }}
        />
    );
}
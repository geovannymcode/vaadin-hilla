import { useEffect } from 'react';
import { useSignal } from '@preact/signals-react';
import { Grid, GridSortColumn } from '@vaadin/react-components';
import Employee from 'Frontend/generated/com/geovannycode/domain/Employee';
import { EmployeeService } from 'Frontend/generated/endpoints';

export default function Employees() {
    const employees = useSignal<Employee[]>([]);

    async function fetchEmployees() {
        const fetchedEmployees = await EmployeeService.findAll();
        employees.value = (fetchedEmployees || []).filter((employee): employee is Employee => employee !== undefined);
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    function ActiveRenderer({ item }: { item: Employee }) {
        const { active } = item;
        const color = active ? 'green' : 'red';
        return <span style={{ fontWeight: 'bold', color }}>{active ? 'Yes' : 'No'}</span>;
    }

    return (
        <div className="p-m flex flex-col gap-m">
            <h2>Empleados</h2>
            <Grid items={employees.value}>
                <GridSortColumn path="firstName" header="Nombre" />
                <GridSortColumn path="lastName" header="Apellido" />
                <GridSortColumn path="gender" header="Género" />
                <GridSortColumn path="email" header="Correo Electrónico" />
                <GridSortColumn path="phone" header="Teléfono" />
                <GridSortColumn path="startDate" header="Fecha de Inicio" />
                <GridSortColumn path="shiftStartsAt" header="Inicio del Turno" />
                <GridSortColumn path="active" header="Activo" renderer={ActiveRenderer}/>
                <GridSortColumn path="description" header="Descripción" />
            </Grid>
        </div>
    );
}

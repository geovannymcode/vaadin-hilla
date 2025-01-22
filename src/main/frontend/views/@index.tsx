import { useEffect } from 'react';
import { useSignal } from '@preact/signals-react';
import { Grid, GridSortColumn } from '@vaadin/react-components';
import Employee from 'Frontend/generated/com/geovannycode/domain/Employee';
import { EmployeeService } from 'Frontend/generated/endpoints';

export default function Employees() {
    const employees = useSignal<Employee[]>([]);

    // Función para obtener la lista de empleados
    async function fetchEmployees() {
        const fetchedEmployees = await EmployeeService.findAll();
        employees.value = (fetchedEmployees || []).filter((employee): employee is Employee => employee !== undefined);
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="p-m flex flex-col gap-m">
            <h2>Empleados</h2>
        <Grid items={employees.value}>
            <GridSortColumn path="name" header="Nombre" />
            <GridSortColumn path="email" header="Correo Electrónico" />
            <GridSortColumn path="phone" header="Teléfono" />
        </Grid>
        </div>
    );
}

package com.geovannycode.domain;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class EmployeeService extends CrudRepositoryService<Employee, Long, EmployeeRepository> {

    public List<Employee> findAll() {
        return getRepository().findAll();
    }

   public Employee save(Employee employee) {
        return getRepository().save(employee);
    }

}

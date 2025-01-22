package com.geovannycode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

@SpringBootApplication
@Theme("hilla")
public class VaadinHillaApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(VaadinHillaApplication.class, args);
    }
}

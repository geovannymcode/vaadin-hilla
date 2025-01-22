import { createRoute as createRoute_1 } from "@vaadin/hilla-file-router/runtime.js";
import type { AgnosticRoute as AgnosticRoute_1 } from "@vaadin/hilla-file-router/types.js";
import * as Page_1 from "../views/@index.js";
import * as Page_2 from "../views/auto-crud.js";
import * as Page_3 from "../views/auto-form.js";
import * as Page_4 from "../views/auto-grid.js";
const routes: readonly AgnosticRoute_1[] = [
    createRoute_1("", Page_1),
    createRoute_1("auto-crud", Page_2),
    createRoute_1("auto-form", Page_3),
    createRoute_1("auto-grid", Page_4)
];
export default routes;

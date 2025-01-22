import { _enum as _enum_1, EnumModel as EnumModel_1, makeEnumEmptyValueCreator as makeEnumEmptyValueCreator_1 } from "@vaadin/hilla-lit-form";
import Gender_1 from "./Gender.js";
class GenderModel extends EnumModel_1<typeof Gender_1> {
    static override createEmptyValue = makeEnumEmptyValueCreator_1(GenderModel);
    readonly [_enum_1] = Gender_1;
}
export default GenderModel;

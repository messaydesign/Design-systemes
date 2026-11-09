/* Docs examples: each entry renders live and shows its own source file. */

import AvatarDemo from "@/registry/main/examples/docs/avatar/avatar-demo"
import AvatarError from "@/registry/main/examples/docs/avatar/avatar-error"
import AvatarFallback from "@/registry/main/examples/docs/avatar/avatar-fallback"
import AvatarSizes from "@/registry/main/examples/docs/avatar/avatar-sizes"
import BadgeDemo from "@/registry/main/examples/docs/badge/badge-demo"
import BadgeLink from "@/registry/main/examples/docs/badge/badge-link"
import BadgeVariants from "@/registry/main/examples/docs/badge/badge-variants"
import ButtonCorners from "@/registry/main/examples/docs/button/button-corners"
import ButtonDemo from "@/registry/main/examples/docs/button/button-demo"
import ButtonDisabled from "@/registry/main/examples/docs/button/button-disabled"
import ButtonIcons from "@/registry/main/examples/docs/button/button-icons"
import ButtonLink from "@/registry/main/examples/docs/button/button-link"
import ButtonLoading from "@/registry/main/examples/docs/button/button-loading"
import ButtonSelected from "@/registry/main/examples/docs/button/button-selected"
import ButtonSizes from "@/registry/main/examples/docs/button/button-sizes"
import ButtonVariants from "@/registry/main/examples/docs/button/button-variants"
import CardAction from "@/registry/main/examples/docs/card/card-action"
import CardCorners from "@/registry/main/examples/docs/card/card-corners"
import CardDemo from "@/registry/main/examples/docs/card/card-demo"
import DialogControlled from "@/registry/main/examples/docs/dialog/dialog-controlled"
import DialogDemo from "@/registry/main/examples/docs/dialog/dialog-demo"
import DialogNoClose from "@/registry/main/examples/docs/dialog/dialog-no-close"
import DialogScroll from "@/registry/main/examples/docs/dialog/dialog-scroll"
import FieldCounter from "@/registry/main/examples/docs/field/field-counter"
import FieldDemo from "@/registry/main/examples/docs/field/field-demo"
import FieldHorizontal from "@/registry/main/examples/docs/field/field-horizontal"
import FieldMessageStatus from "@/registry/main/examples/docs/field/field-message-status"
import FieldSet from "@/registry/main/examples/docs/field/field-set"
import FieldValidation from "@/registry/main/examples/docs/field/field-validation"
import InputDemo from "@/registry/main/examples/docs/input/input-demo"
import InputField from "@/registry/main/examples/docs/input/input-field"
import InputForm from "@/registry/main/examples/docs/input/input-form"
import InputShape from "@/registry/main/examples/docs/input/input-shape"
import InputStates from "@/registry/main/examples/docs/input/input-states"
import InputValidation from "@/registry/main/examples/docs/input/input-validation"
import ItemDemo from "@/registry/main/examples/docs/item/item-demo"
import ItemGroup from "@/registry/main/examples/docs/item/item-group"
import ItemLink from "@/registry/main/examples/docs/item/item-link"
import ItemVariants from "@/registry/main/examples/docs/item/item-variants"
import SelectDemo from "@/registry/main/examples/docs/select/select-demo"
import SelectField from "@/registry/main/examples/docs/select/select-field"
import SelectShape from "@/registry/main/examples/docs/select/select-shape"
import SelectValidation from "@/registry/main/examples/docs/select/select-validation"

export const examples = {
  "avatar-demo": { component: AvatarDemo, file: "registry/main/examples/docs/avatar/avatar-demo.tsx" },
  "avatar-error": { component: AvatarError, file: "registry/main/examples/docs/avatar/avatar-error.tsx" },
  "avatar-fallback": { component: AvatarFallback, file: "registry/main/examples/docs/avatar/avatar-fallback.tsx" },
  "avatar-sizes": { component: AvatarSizes, file: "registry/main/examples/docs/avatar/avatar-sizes.tsx" },
  "badge-demo": { component: BadgeDemo, file: "registry/main/examples/docs/badge/badge-demo.tsx" },
  "badge-link": { component: BadgeLink, file: "registry/main/examples/docs/badge/badge-link.tsx" },
  "badge-variants": { component: BadgeVariants, file: "registry/main/examples/docs/badge/badge-variants.tsx" },
  "button-corners": { component: ButtonCorners, file: "registry/main/examples/docs/button/button-corners.tsx" },
  "button-demo": { component: ButtonDemo, file: "registry/main/examples/docs/button/button-demo.tsx" },
  "button-disabled": { component: ButtonDisabled, file: "registry/main/examples/docs/button/button-disabled.tsx" },
  "button-icons": { component: ButtonIcons, file: "registry/main/examples/docs/button/button-icons.tsx" },
  "button-link": { component: ButtonLink, file: "registry/main/examples/docs/button/button-link.tsx" },
  "button-loading": { component: ButtonLoading, file: "registry/main/examples/docs/button/button-loading.tsx" },
  "button-selected": { component: ButtonSelected, file: "registry/main/examples/docs/button/button-selected.tsx" },
  "button-sizes": { component: ButtonSizes, file: "registry/main/examples/docs/button/button-sizes.tsx" },
  "button-variants": { component: ButtonVariants, file: "registry/main/examples/docs/button/button-variants.tsx" },
  "card-action": { component: CardAction, file: "registry/main/examples/docs/card/card-action.tsx" },
  "card-corners": { component: CardCorners, file: "registry/main/examples/docs/card/card-corners.tsx" },
  "card-demo": { component: CardDemo, file: "registry/main/examples/docs/card/card-demo.tsx" },
  "dialog-controlled": { component: DialogControlled, file: "registry/main/examples/docs/dialog/dialog-controlled.tsx" },
  "dialog-demo": { component: DialogDemo, file: "registry/main/examples/docs/dialog/dialog-demo.tsx" },
  "dialog-no-close": { component: DialogNoClose, file: "registry/main/examples/docs/dialog/dialog-no-close.tsx" },
  "dialog-scroll": { component: DialogScroll, file: "registry/main/examples/docs/dialog/dialog-scroll.tsx" },
  "field-counter": { component: FieldCounter, file: "registry/main/examples/docs/field/field-counter.tsx" },
  "field-demo": { component: FieldDemo, file: "registry/main/examples/docs/field/field-demo.tsx" },
  "field-horizontal": { component: FieldHorizontal, file: "registry/main/examples/docs/field/field-horizontal.tsx" },
  "field-message-status": { component: FieldMessageStatus, file: "registry/main/examples/docs/field/field-message-status.tsx" },
  "field-set": { component: FieldSet, file: "registry/main/examples/docs/field/field-set.tsx" },
  "field-validation": { component: FieldValidation, file: "registry/main/examples/docs/field/field-validation.tsx" },
  "input-demo": { component: InputDemo, file: "registry/main/examples/docs/input/input-demo.tsx" },
  "input-field": { component: InputField, file: "registry/main/examples/docs/input/input-field.tsx" },
  "input-form": { component: InputForm, file: "registry/main/examples/docs/input/input-form.tsx" },
  "input-shape": { component: InputShape, file: "registry/main/examples/docs/input/input-shape.tsx" },
  "input-states": { component: InputStates, file: "registry/main/examples/docs/input/input-states.tsx" },
  "input-validation": { component: InputValidation, file: "registry/main/examples/docs/input/input-validation.tsx" },
  "item-demo": { component: ItemDemo, file: "registry/main/examples/docs/item/item-demo.tsx" },
  "item-group": { component: ItemGroup, file: "registry/main/examples/docs/item/item-group.tsx" },
  "item-link": { component: ItemLink, file: "registry/main/examples/docs/item/item-link.tsx" },
  "item-variants": { component: ItemVariants, file: "registry/main/examples/docs/item/item-variants.tsx" },
  "select-demo": { component: SelectDemo, file: "registry/main/examples/docs/select/select-demo.tsx" },
  "select-field": { component: SelectField, file: "registry/main/examples/docs/select/select-field.tsx" },
  "select-shape": { component: SelectShape, file: "registry/main/examples/docs/select/select-shape.tsx" },
  "select-validation": { component: SelectValidation, file: "registry/main/examples/docs/select/select-validation.tsx" },
} as const

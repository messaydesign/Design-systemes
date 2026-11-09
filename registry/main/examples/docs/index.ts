/* Docs examples: each entry renders live and shows its own source file. */

import ButtonDemo from "@/registry/main/examples/docs/button/button-demo"
import ButtonVariants from "@/registry/main/examples/docs/button/button-variants"
import ButtonSizes from "@/registry/main/examples/docs/button/button-sizes"
import ButtonIcons from "@/registry/main/examples/docs/button/button-icons"
import ButtonLoading from "@/registry/main/examples/docs/button/button-loading"
import ButtonDisabled from "@/registry/main/examples/docs/button/button-disabled"
import ButtonCorners from "@/registry/main/examples/docs/button/button-corners"
import ButtonSelected from "@/registry/main/examples/docs/button/button-selected"
import ButtonLink from "@/registry/main/examples/docs/button/button-link"
import InputDemo from "@/registry/main/examples/docs/input/input-demo"
import InputField from "@/registry/main/examples/docs/input/input-field"
import InputValidation from "@/registry/main/examples/docs/input/input-validation"
import InputStates from "@/registry/main/examples/docs/input/input-states"
import InputShape from "@/registry/main/examples/docs/input/input-shape"
import InputForm from "@/registry/main/examples/docs/input/input-form"
import SelectDemo from "@/registry/main/examples/docs/select/select-demo"
import SelectField from "@/registry/main/examples/docs/select/select-field"
import SelectValidation from "@/registry/main/examples/docs/select/select-validation"
import SelectShape from "@/registry/main/examples/docs/select/select-shape"
import DialogDemo from "@/registry/main/examples/docs/dialog/dialog-demo"
import DialogControlled from "@/registry/main/examples/docs/dialog/dialog-controlled"
import DialogScroll from "@/registry/main/examples/docs/dialog/dialog-scroll"
import DialogNoClose from "@/registry/main/examples/docs/dialog/dialog-no-close"
import CardDemo from "@/registry/main/examples/docs/card/card-demo"
import CardCorners from "@/registry/main/examples/docs/card/card-corners"
import CardAction from "@/registry/main/examples/docs/card/card-action"

export const examples = {
  "button-demo": { component: ButtonDemo, file: "registry/main/examples/docs/button/button-demo.tsx" },
  "button-variants": { component: ButtonVariants, file: "registry/main/examples/docs/button/button-variants.tsx" },
  "button-sizes": { component: ButtonSizes, file: "registry/main/examples/docs/button/button-sizes.tsx" },
  "button-icons": { component: ButtonIcons, file: "registry/main/examples/docs/button/button-icons.tsx" },
  "button-loading": { component: ButtonLoading, file: "registry/main/examples/docs/button/button-loading.tsx" },
  "button-disabled": { component: ButtonDisabled, file: "registry/main/examples/docs/button/button-disabled.tsx" },
  "button-corners": { component: ButtonCorners, file: "registry/main/examples/docs/button/button-corners.tsx" },
  "button-selected": { component: ButtonSelected, file: "registry/main/examples/docs/button/button-selected.tsx" },
  "button-link": { component: ButtonLink, file: "registry/main/examples/docs/button/button-link.tsx" },
  "input-demo": { component: InputDemo, file: "registry/main/examples/docs/input/input-demo.tsx" },
  "input-field": { component: InputField, file: "registry/main/examples/docs/input/input-field.tsx" },
  "input-validation": { component: InputValidation, file: "registry/main/examples/docs/input/input-validation.tsx" },
  "input-states": { component: InputStates, file: "registry/main/examples/docs/input/input-states.tsx" },
  "input-shape": { component: InputShape, file: "registry/main/examples/docs/input/input-shape.tsx" },
  "input-form": { component: InputForm, file: "registry/main/examples/docs/input/input-form.tsx" },
  "select-demo": { component: SelectDemo, file: "registry/main/examples/docs/select/select-demo.tsx" },
  "select-field": { component: SelectField, file: "registry/main/examples/docs/select/select-field.tsx" },
  "select-validation": { component: SelectValidation, file: "registry/main/examples/docs/select/select-validation.tsx" },
  "select-shape": { component: SelectShape, file: "registry/main/examples/docs/select/select-shape.tsx" },
  "dialog-demo": { component: DialogDemo, file: "registry/main/examples/docs/dialog/dialog-demo.tsx" },
  "dialog-controlled": { component: DialogControlled, file: "registry/main/examples/docs/dialog/dialog-controlled.tsx" },
  "dialog-scroll": { component: DialogScroll, file: "registry/main/examples/docs/dialog/dialog-scroll.tsx" },
  "dialog-no-close": { component: DialogNoClose, file: "registry/main/examples/docs/dialog/dialog-no-close.tsx" },
  "card-demo": { component: CardDemo, file: "registry/main/examples/docs/card/card-demo.tsx" },
  "card-corners": { component: CardCorners, file: "registry/main/examples/docs/card/card-corners.tsx" },
  "card-action": { component: CardAction, file: "registry/main/examples/docs/card/card-action.tsx" },
} as const

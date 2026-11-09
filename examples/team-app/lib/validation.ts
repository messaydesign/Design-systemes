/* Validation rules for the New project form (app logic, not component logic). */

export type ProjectForm = {
  name: string
  owner: string
  status: string
  description: string
}

export type FormErrors = Partial<Record<keyof ProjectForm, string>>

export const DESCRIPTION_MAX = 200

export function validateProject(values: ProjectForm): FormErrors {
  const errors: FormErrors = {}
  const name = values.name.trim()
  if (!name) errors.name = "Enter a project name."
  else if (name.length < 3) errors.name = "Use at least 3 characters."
  else if (name.length > 60) errors.name = "Use 60 characters or fewer."

  if (!values.owner.trim()) errors.owner = "Enter the owner’s email address."
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.owner.trim())) errors.owner = "Enter an email like name@example.com."

  if (!values.status) errors.status = "Choose a status."

  if (values.description.length > DESCRIPTION_MAX) errors.description = `Keep it under ${DESCRIPTION_MAX} characters.`
  return errors
}

export const FIELD_LABELS: Record<keyof ProjectForm, string> = {
  name: "Project name",
  owner: "Owner",
  status: "Status",
  description: "Description",
}

export interface FormValues {
  filters: string[];
  order: "relevant" | "min" | "max";
  view: "grid" | "list";
}

export const defaultValues: FormValues = {
  filters: [],
  order: "max",
  view: "grid",
};

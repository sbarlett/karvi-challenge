
import InputSearch from "@/components/Inputs/InputSearch";
import { fireEvent, render } from "@testing-library/react";

describe("InputSearch", () => {
  it("should render", () => {
    const { getByRole } = render(
      <InputSearch name="search" placeholder="Buscar" onChange={() => {}} />
    );

    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "Toyota" } }
    );
    
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "search");
    expect(input).toHaveAttribute("placeholder", "Buscar");
    expect(input).toHaveValue("Toyota");
  });
});

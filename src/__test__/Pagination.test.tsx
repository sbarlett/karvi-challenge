import Pagination from "@/components/Pagination";
import { fireEvent, render } from "@testing-library/react";

describe("Pagination", () => {
  const setPage = jest.fn();

  it("should render correctly", () => {
    const { getByText } = render(
      <Pagination totalPages={3} page={1} setPage={setPage} />
    );
    expect(getByText(/Anterior/i)).toBeInTheDocument();
    expect(getByText(/Próximo/i)).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
  });

  it("should handle next page click", () => {
    const { getByRole } = render(
      <Pagination totalPages={3} page={1} setPage={setPage} />
    );

    const nextButton = getByRole("button", { name: /Próximo/i });
    fireEvent.click(nextButton);

    expect(setPage).toHaveBeenCalledWith(2);
  });

  it("should handle previous page click", () => {
    const { getByRole } = render(
      <Pagination totalPages={3} page={2} setPage={setPage} />
    );

    const prevButton = getByRole("button", { name: /Anterior/i });
    fireEvent.click(prevButton);

    expect(setPage).toHaveBeenCalledWith(1);
  });

  it("should handle page number click", () => {
    const { getByText } = render(
      <Pagination totalPages={3} page={1} setPage={setPage} />
    );

    const pageNumber = getByText("3");
    fireEvent.click(pageNumber);

    expect(setPage).toHaveBeenCalledWith(3);
  });

  it("should disable previous button on first page", () => {
    const { getByRole } = render(
      <Pagination totalPages={3} page={1} setPage={setPage} />
    );

    const prevButton = getByRole("button", { name: /Anterior/i });
    expect(prevButton).toBeDisabled();
  });

  it("should disable next button on last page", () => {
    const { getByRole } = render(
      <Pagination totalPages={3} page={3} setPage={setPage} />
    );

    const nextButton = getByRole("button", { name: /Próximo/i });
    expect(nextButton).toBeDisabled();
  });
});

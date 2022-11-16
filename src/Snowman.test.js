import Snowman from "./Snowman.js";
import { render, fireEvent } from "@testing-library/react";

describe("end game", function () {
  it("matches snapshot after lose", function () {
    const { container } = render(<Snowman maxWrong={1} />);
    const letterButton = container.querySelector('.q');
    fireEvent.click(letterButton);

    expect(container).toMatchSnapshot();
    expect("You lose").toBeInTheDocument();
  });
});

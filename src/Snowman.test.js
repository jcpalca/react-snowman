import Snowman from "./Snowman.js";
import { render, fireEvent } from "@testing-library/react";

describe("end game", function () {
  it("matches snapshot after lose", function () {
    const { container, debug } = render(<Snowman maxWrong={1} />);
    const letterButton = container.querySelector('button[value="q"]');
    // const letterButton = container.querySelector('.q');
    fireEvent.click(letterButton);
    debug(container);

    expect(container).toMatchSnapshot();
    expect(container.querySelector(".lose")).toBeInTheDocument();
  });
});

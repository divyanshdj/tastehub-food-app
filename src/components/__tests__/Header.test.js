const { render, screen } = require("@testing-library/react");
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import tastehubStore from "../../utils/tastehubStore";
import "@testing-library/jest-dom";

describe("Header Component Test Case", () => {
  test("Should load the header component with the Status", () => {
    render(
      <BrowserRouter>
        <Provider store={tastehubStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const statusTexts = screen.getAllByText(/Status :/);

    expect(statusTexts[0]).toBeInTheDocument();
  });
});

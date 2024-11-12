const { render, screen } = require("@testing-library/react")
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page Test Cases", () => {
    test("Should Load Contact Us Component", () => {
        render(<Contact/>);
        const headings = screen.getAllByRole("heading");
        expect(headings.length).toBe(4);
    })
})
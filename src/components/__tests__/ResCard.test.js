import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardData.json";
import MOCK_DATA_2 from "../mocks/resCardWithLabelData.json";
import ReastaurentCard, { withVegLabelCard } from "../ReastaurentCard";

const ReastaurentVegCard = withVegLabelCard(ReastaurentCard);

it("should render the restaurant card", ()=>{
    render(<ReastaurentCard resData={MOCK_DATA}/>);
    const restaurantTitle = screen.getByText("Pizza Hut");
    expect(restaurantTitle).toBeInTheDocument();
})

it("should render the restaurant card with label", ()=>{
    render(<ReastaurentVegCard resData={MOCK_DATA_2}/>);
    const vegLabel = screen.getByText("Veg");
    expect(vegLabel).toBeInTheDocument();
})
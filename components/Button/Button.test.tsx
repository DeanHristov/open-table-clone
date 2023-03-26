import {render} from "@testing-library/react";
import Button from "./Button";

describe("Component: <Button {...} />", () => {
    it("Should be able to render default state", () => {
        const {container} = render(
            <Button title="click me"/>
        );

        expect(container).toMatchSnapshot();
    })
})
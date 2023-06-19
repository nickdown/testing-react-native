import * as React from "react";
import { render } from "@testing-library/react-native";
import DropdownContent from './Dropdown'

it("reproduction test", () => {
    const { getByText } = render(<DropdownContent />);

    getByText("Some amazing test");
});
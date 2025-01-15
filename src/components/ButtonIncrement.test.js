import { render, screen, fireEvent } from "@testing-library/react";
import ButtonIncrement from "./ButtonIncrement";

describe('ButtonIncrement', () => {

    it('should render correctly', () => {
        render(<ButtonIncrement />);
        expect(screen.getByText(/Count : 0/)).toBeInTheDocument();
    });

    test('should increment the count', () => {
        render(<ButtonIncrement />);
        const incrementButton = screen.getByText('Increment');
        
        fireEvent.click(incrementButton);

        expect(screen.getByText(/Count : 1/)).toBeInTheDocument();
    });

    test('should decrement the count', () => {
        render(<ButtonIncrement />);
        const decrementButton = screen.getByText('Decrement');
        
        fireEvent.click(decrementButton);

        expect(screen.getByText(/Count : -1/)).toBeInTheDocument();
    });
});

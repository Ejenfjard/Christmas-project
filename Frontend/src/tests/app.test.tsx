import '@testing-library/jest-dom'; 
import {describe, expect, it} from 'vitest'; 
import {render, screen} from '@testing-library/react'; 

import App from '../App'; 

describe('App component', () => {
    it('should have a correct heading', () => {
        render(<App/>);
        const heading = screen.getByText(/app/i); 
        expect(heading).toBeInTheDocument(); 
    }); 
}); 
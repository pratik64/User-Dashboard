import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import App from '../../App';
import { fireEvent, getByRole, getByText, queryAllByText, queryByText, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
Enzyme.configure({ adapter: new Adapter() });


describe('Login component Test', () => {
    
    test('should render required if fields are empty and tried to login', () => {
    
    //     const { queryByText } = render(
    //         <Provider store={store} >
    //            <App></App>    
    //         </Provider>
    //         )

    // const btn = screen.getByTestId('loginBtn')
    //  fireEvent.click(btn);
    //  expect(queryByText('Required')).toBeInTheDocument()
    //  screen.debug()

    })
})

export { }


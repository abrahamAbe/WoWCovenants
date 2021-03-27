import { shallow } from '../enzyme';
import { Link } from 'react-router-dom';
import { CovenantDetails } from '../components/covenantDetails';

//TODO Couldn't test components as enzyme doesn't support react hooks yet (useContext === undefined).
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 'group1',
    }),
}));

describe('CovenantDetails', () => {
    it('renders covenant details', () => {
        const wrapper = shallow(<CovenantDetails />);

        expect(wrapper.contains(<Link to={`/`}>Go back</Link>)).toBeTruthy();
    });
})
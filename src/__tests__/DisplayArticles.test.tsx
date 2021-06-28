import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import DisplayArticles, {
	DisplayArticlesProps,
} from "../components/DisplayArticles";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as reactRedux from "react-redux";
import { Button } from "@material-ui/core";

configure({ adapter: new Adapter() });

afterEach(() => {
	jest.clearAllMocks();
});

describe("Snapshot testing and unit testing", () => {
	const initialState = { articles: [] };
	const mockStore = configureStore();
	const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

	it("renders with basic props", () => {
		const displayArticlesProps: DisplayArticlesProps = {
			articles: [
				{
					title: "Mocked Title",
					source: {},
					description: "Mocked Description",
				},
			],
			loading: false,
			increasePageNum: jest.fn(),
			fetchedAll: false,
		};

		const store = mockStore(initialState);
		const component = shallow(
			<Provider store={store}>
				<DisplayArticles {...displayArticlesProps} />
			</Provider>
		);
		expect(component).toMatchSnapshot();
	});

	it("calls dispatch on button press", () => {
		const fakeDispatch = jest.fn();
		useDispatchMock.mockReturnValue(fakeDispatch);
		const displayArticlesProps: DisplayArticlesProps = {
			articles: [
				{
					title: "Mocked Title",
					source: {},
					description: "Mocked Description",
				},
			],
			loading: false,
			increasePageNum: jest.fn(),
			fetchedAll: false,
		};

		const store = mockStore(initialState);

		const component = shallow(<DisplayArticles {...displayArticlesProps} />);

		console.log(component.debug());
		component.find(Button).simulate("click");

		expect(fakeDispatch).toBeCalledTimes(1);
	});
});

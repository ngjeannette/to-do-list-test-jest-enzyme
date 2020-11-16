// ============ FULL RENDERING MOUNT instead of shallow =================
import { mount } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';
//note: enzyme not compatible with react 17, will have to downgrade to react 16.

describe('To Do Testing', () => {
    let wrapper;
    beforeEach(() => {
        // test app + components, full rendering
        wrapper = mount(<App />)
    })

    // 1) test to render h1 tags UI
    test('render the title', () => {
        expect(wrapper.find('h1').text()).toContain('To Do Test');
    });

    // 2) test to render submit will add onto list
    test('click submit will add onto list', () => {
        wrapper.find('#submit').simulate('click');
        expect(wrapper.find('.panel-block').length).toBe(2);
    })

    // 3) test click of check will check checkbox, and click again will remove checkbox... checking checkbox checks checkbox :D
    test('click of check will toggle checkbox true', () => {
        wrapper.find('#submit').simulate('click');
        wrapper.find('input[type="checkbox"]').simulate("click", { target: { checked: true } });
        wrapper.find('input[type="checkbox"]').simulate("click", { target: { checked: false } });
    })

    // 4) test click of check update complete total + 1
    test('check of checkbox updates complete', () => {
        wrapper.find('#submit').simulate('click');
        wrapper.find('input[type="checkbox"]').simulate("click", { target: { checked: true } });
        wrapper.update();
        expect(parseInt(wrapper.find('#total').text())).toBe(1);
    })
    // 5) test click of check update complete total - 1
    test('uncheck of checkbox updates complete', () => {
        wrapper.find('#submit').simulate('click');
        wrapper.find('input[type="checkbox"]').simulate("click", { target: { checked: true } });
        wrapper.find('input[type="checkbox"]').simulate("click", { target: { checked: false } });
        wrapper.update();
        expect(parseInt(wrapper.find('#total').text())).toBe(0);
    })
    // 6) snapshot
    test('renders snap shot correctly', () => {
        const tree = renderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})

// to run test: yarn run test
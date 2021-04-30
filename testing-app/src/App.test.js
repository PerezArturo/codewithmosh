import App from "./App";
import { mount } from "enzyme";

describe("Counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    console.log(wrapper);
  });
  test("renders learn react link", () => {
    expect(wrapper.find("h1").text()).toContain("React Testting");
  });

  test("render button with text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the click event", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
});

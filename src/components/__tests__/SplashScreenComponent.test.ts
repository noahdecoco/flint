import { SplashScreenComponent } from "../SplashScreenComponent";
jest.mock("../SplashScreenComponent");

test("SplashScreenComponent should initialise", () => {
  expect(SplashScreenComponent).not.toHaveBeenCalled();
  const splashScreenComponent = new SplashScreenComponent();
  expect(SplashScreenComponent).toHaveBeenCalledTimes(1);
});

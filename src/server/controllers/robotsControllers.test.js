const Robot = require("../../database/models/Robot");
const { getRobots } = require("./robotsControllers");

jest.mock("../../database/models/Robot");

describe("Given a getRobots controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("When it receives a response", () => {
    test("Then it should call method json of the received response", async () => {
      const res = {
        json: jest.fn(),
      };
      const robots = [
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "1",
          name: "Luis",
          url: "",
        },
      ];

      Robot.find = jest.fn().mockResolvedValue(robots);

      await getRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robots });
    });
  });
});

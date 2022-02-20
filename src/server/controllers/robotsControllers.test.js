const Robot = require("../../database/models/Robot");
const { getRobots, getARobot, deleteRobot } = require("./robotsControllers");

jest.mock("../../database/models/Robot");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Given a getRobots controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call method json of the received response", async () => {
      const res = {
        status: jest.fn(),
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

describe("Given a geARobot controller", () => {
  describe("When it receives a response with an id in the params", () => {
    test("Then it should call method json of the received response", async () => {
      const req = {
        params: {
          _id: "1",
        },
      };
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const robot = [
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

      Robot.findById = jest.fn().mockResolvedValue(robot);

      await getARobot(req, res);

      expect(Robot.findById).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robot });
    });
  });
});

describe("Given a deleteRobot controller", () => {
  describe("When it receives a response with an id in the params", () => {
    test("Then it should call status and json methods of the received response", async () => {
      const req = {
        params: {
          _id: "1",
        },
      };
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const robot = [
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

      Robot.findByIdAndDelete = jest.fn().mockResolvedValue(robot);

      await deleteRobot(req, res);

      expect(Robot.findByIdAndDelete).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robot });
    });
  });
});

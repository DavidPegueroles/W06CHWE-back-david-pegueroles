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
        status: jest.fn().mockReturnThis(),
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
      const status = 200;

      Robot.find = jest.fn().mockResolvedValue(robots);

      await getRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(status);
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
        status: jest.fn().mockReturnThis(),
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
      const status = 200;

      Robot.findById = jest.fn().mockResolvedValue(robot);

      await getARobot(req, res);

      expect(Robot.findById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(status);
      expect(res.json).toHaveBeenCalledWith({ robot });
    });
  });

  describe("When it's invoked with req , res and next and req doesn't have the propertiy query.idRobot and an the Robot.find results rejected", () => {
    test("Then the function next should be called with the reject reason", async () => {
      const req = {
        params: {},
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      const errorMessage =
        "You just killed all the robots. Please come again later in a hope of finding what you wanted :(";

      Robot.findById = jest.fn().mockRejectedValue(errorMessage);

      await getARobot(req, res, next);

      expect(Robot.findById).toHaveBeenCalled();
      expect(next).toHaveBeenCalledWith(errorMessage);
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
        status: jest.fn().mockReturnThis(),
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

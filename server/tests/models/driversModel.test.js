const { Driver } = require("../../src/db");

let driverData;

beforeEach(() => {
  driverData = {
    firstName: "user",
    lastName: "test",
    dob: "1990-01-01",
    nationality: "American",
    description: "Experienced driver",
    image: "user_test.jpg",
  };
});

describe("Driver Model", () => {
  it("should create a driver with valid attributes", async () => {
    const driver = await Driver.create(driverData);

    expect(driver.id).toBeDefined();
    expect(driver.firstName).toBe(driverData.firstName);
    expect(driver.lastName).toBe(driverData.lastName);
    expect(driver.dob).toBe(driverData.dob);
    expect(driver.nationality).toBe(driverData.nationality);
    expect(driver.description).toBe(driverData.description);
    expect(driver.image).toBe(driverData.image);
  });

  it("should not create a driver with invalid firstName", async () => {
    driverData.firstName = "user1";
    await expect(Driver.create(driverData)).rejects.toThrow();
  });

  it("should not create a driver with invalid lastName", async () => {
    driverData.lastName = "test1";
    await expect(Driver.create(driverData)).rejects.toThrow();
  });

  it("should not create a driver with invalid dob", async () => {
    driverData.dob = null;
    await expect(Driver.create(driverData)).rejects.toThrow();
  });

  it("should not create a driver with invalid nationallity", async () => {
    driverData.nationality = null;
    await expect(Driver.create(driverData)).rejects.toThrow();
  });

  it("should not create a driver with invalid description", async () => {
    driverData.description = null;
    await expect(Driver.create(driverData)).rejects.toThrow();
  });

  it("should not create a driver with invalid image URL", async () => {
    driverData.image = null;
    await expect(Driver.create(driverData)).rejects.toThrow();
  });
});

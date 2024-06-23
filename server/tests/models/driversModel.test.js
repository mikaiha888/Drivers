const { Driver } = require("../../src/models/Drivers");
const { expect } = require("jest");

let driverData;

beforeEach(() => {
  driverData = {
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    nationality: "American",
    description: "Experienced driver",
    image: "http://example.com/image.jpg",
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
    driverData.firstName = "J1";
    await expect(driverData).rejects.toThrow();
  });

  it("should not create a driver with invalid lastName", async () => {
    driverData.lastName = "D1";
    await expect(Driver.create(driverData)).rejects.toThrow();
  });

  it("should not create a driver with invalid dob", async () => {
    driverData.dob = 19900101;
    await expect(driverData).rejects.toThrow();
  });

  it("should not create a driver with invalid nationallity", async () => {
    driverData.nationality = "A1";
    await expect(driverData).rejects.toThrow();
  });

  it("should not create a driver with invalid description", async () => {
    driverData.description = "Test";
    await expect(driverData).rejects.toThrow();
  });

  it("should not create a driver with invalid image URL", async () => {
    driverData.image = "invalid-url";
    await expect(driverData).rejects.toThrow();
  });
});

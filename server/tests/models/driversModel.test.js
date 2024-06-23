const { Driver } = require("../../src/models/Drivers");
const { expect } = require("jest");

const driverData = {
  firstName: "John",
  lastName: "Doe",
  dob: "1990-01-01",
  nationality: "American",
  description: "Experienced driver",
  image: "http://example.com/image.jpg",
};

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
    await expect(
      Driver.create({
        firstName: "J1",
        lastName: "Doe",
        dob: "1990-01-01",
        nationality: "American",
        description: "Experienced driver",
        image: "http://example.com/image.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a driver with invalid lastName", async () => {
    await expect(
      Driver.create({
        firstName: "John",
        lastName: "D1",
        dob: "1990-01-01",
        nationality: "American",
        description: "Experienced driver",
        image: "http://example.com/image.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a driver with invalid dob", async () => {
    await expect(
      Driver.create({
        firstName: "John",
        lastName: "Doe",
        dob: 19900101,
        nationality: "American",
        description: "Experienced driver",
        image: "http://example.com/image.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a driver with invalid nationallity", async () => {
    await expect(
      Driver.create({
        firstName: "John",
        lastName: "Doe",
        dob: "1990-01-01",
        nationality: "A1",
        description: "Experienced driver",
        image: "http://example.com/image.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a driver with invalid description", async () => {
    await expect(
      Driver.create({
        firstName: "John",
        lastName: "Doe",
        dob: "1990-01-01",
        nationality: "American",
        description: "Test",
        image: "http://example.com/image.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not create a driver with invalid image URL", async () => {
    await expect(
      Driver.create({
        firstName: "John",
        lastName: "Doe",
        dob: "1990-01-01",
        nationality: "American",
        description: "Experienced driver",
        image: "invalid-url",
      })
    ).rejects.toThrow();
  });
});

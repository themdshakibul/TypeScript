//*  type asserction

//* "as" syntax

type Status = "pending" | "approved" | "rejected";

const sumStatus: string = "pending";

const showStatus = (status: Status) => {
  console.log("your current application status is" + status);
};

showStatus(sumStatus as Status); //? as asserction

//* non-null asserction

interface Config {
  port?: number;
}

const config: Config = {
  port: 5000,
};

const currentPort: number = config.port!;
// const currentPort: number = config.port as number;

//* constant asserction

const configration = {
  port: 8000,
  prefix: "/api/v1",
} as const; //? jodi lock down kore dite chai tahole "as const" use korbo ata readonly.

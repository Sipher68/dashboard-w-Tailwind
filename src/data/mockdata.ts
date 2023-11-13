import { faker } from '@faker-js/faker';

let pao_number = faker.number.int({ min: 1, max: 100 });
let driver_number = faker.number.int({ min: 1, max: 100 });

function generateOperatorData(count: number) {
  let operators = [];
  for (let i = 1; i <= count; i++) {
    operators.push({
      Operator_ID: i,
      Operator_Name: faker.company.name(),
      Date_Enrolled: faker.date.past().toLocaleDateString(),
      Jeepney_Count: faker.number.int(100),
      Driver_Count: faker.number.int(100),
      PAO_Count: faker.number.int(100),
      Status: faker.helpers.arrayElement(['Active', 'Inactive']),
    });
  }
  return operators;
}

function generatePAOData(count: number) {
  let pao = [];
  for (let i = 1; i <= count; i++) {
    pao.push({
      ID: i,
      ID_Type: 'PAO',
      Operator_ID: faker.number.int({ min: 1, max: 10 }),
      Name: faker.person.firstName() + ' ' + faker.person.lastName(),
      Profile_Picture: faker.image.avatar(),
      License: faker.string.alphanumeric(8),
      Date_Enrolled: faker.date.past().toLocaleDateString(),
      Date_Of_Employment: faker.date.past().toLocaleDateString(),
      Employment_Status: faker.helpers.arrayElement(['Active', 'Inactive']),
      Violations: faker.number.int(20),
      Remarks: faker.helpers.arrayElement(['Good', 'Great', 'Bad']),
    });
  }
  return pao;
}

function generateDriverData(count: number) {
  let drivers = [];
  for (let i = 1; i <= count; i++) {
    drivers.push({
      ID: i,
      ID_Type: 'Driver',
      Operator_ID: faker.number.int({ min: 1, max: 10 }),
      Name: faker.person.firstName() + ' ' + faker.person.lastName(),
      Profile_Picture: faker.image.avatar(),
      License: faker.string.alphanumeric(8),
      Date_Enrolled: faker.date.past().toLocaleDateString(),
      Date_Of_Employment: faker.date.past().toLocaleDateString(),
      Employment_Status: faker.helpers.arrayElement(['Active', 'Inactive']),
      Violations: faker.number.int(20),
      Remarks: faker.helpers.arrayElement(['Good', 'Great', 'Bad']),
    });
  }
  return drivers;
}

function generateBlacklist(count: number) {
  let blacklist = [];
  for (let i = 1; i <= count; i++) {
    blacklist.push({
      ID: i,
      ID_Type: faker.helpers.arrayElement(['PAO', 'Driver']),
      Name: faker.person.firstName() + ' ' + faker.person.lastName(),
      Profile_Picture: faker.image.avatar(),
      Operator_ID: 1,
      License: faker.string.alphanumeric(8),
      Date_Enrolled: faker.date.past().toLocaleDateString(),
      Date_Of_Employment: faker.date.past().toLocaleDateString(),
      Employment_Status: faker.helpers.arrayElement(['BLACKLISTED']),
      Violations: faker.number.int({ min: 15, max: 20 }),
      Remarks: faker.helpers.arrayElement(['Too Many Violations']),
    });
  }
  return blacklist;
}

function generateBulletinData(count: number) {
  let bulletin = [];
  for (let i = 1; i <= count; i++) {
    bulletin.push({
      Department: faker.helpers.arrayElement(['CCTO', 'LTFRB']),
      Message_Location: faker.helpers.arrayElement([
        'MEMO',
        'VIOLATION',
        'PAYMENT DUES',
      ]),
      Message: faker.lorem.sentence(),
    });
  }
  return bulletin;
}

export const data = {
  Operators: generateOperatorData(10),

  PAO: generatePAOData(faker.number.int({ min: 1, max: 50 })),

  Drivers: generateDriverData(faker.number.int({ min: 1, max: 50 })),

  Blacklisted: generateBlacklist(faker.number.int({ min: 1, max: 50 })),

  Profile: {
    Name: '',
    Mobile_Number: '',
    Email: '',
    Password: '',
    SPIN: '',
  },

  Bulletin: generateBulletinData(50),
};

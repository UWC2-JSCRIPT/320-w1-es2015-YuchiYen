import people from './people.json';

people.then((p) => p.default.forEach((person) => {
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(' ');
  console.log(`First name: ${firstName} Last name: ${lastName} Email: ${email} Phone number: ${phone}`);
}));

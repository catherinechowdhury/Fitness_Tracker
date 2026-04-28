export type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "LuneChow",
    email: "lunechow@example.com",
    password: "password123",
  },
  {
    id: 2,
    name: "IrfChow",
    email: "irfchow@example.com",
    password: "password456",
  },
];

let nextId = 3;

export function incrementUserId() {
  return nextId++;
}

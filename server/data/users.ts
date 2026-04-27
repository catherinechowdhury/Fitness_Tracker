export type User = {
  id: number;
  name: string;
  email: string;
};

export const users: User[] = [
  { id: 1, name: "LuneChow", email: "lunechow@test.com" },
  { id: 2, name: "IrfChow", email: "irfchow@test.com" },
];

let nextId = 3;

export function incrementUserId() {
  return nextId++;
}

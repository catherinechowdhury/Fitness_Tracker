import { User, users, incrementUserId } from "../data/users";

// GET all users
export function getAll() {
  return users;
}

// GET one user
export function getById(id: number) {
  return users.find((u) => u.id === id);
}

// CREATE user
export function create(user: Omit<User, "id">) {
  const newUser: User = {
    id: incrementUserId(),
    ...user,
  };

  users.push(newUser);
  return newUser;
}

// UPDATE user
export function update(id: number, data: Partial<User>) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  users[index] = {
    ...users[index],
    ...data,
  };

  return users[index];
}

// DELETE user
export function remove(id: number) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  return true;
}

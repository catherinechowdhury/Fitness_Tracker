import { Mood, moods, incrementMoodId } from "../data/mood";

// GET all moods for user
export function getAll(userId: number) {
  const list = moods.filter((m) => m.userId === userId);

  return {
    list,
    count: list.length,
  };
}

// CREATE mood
export function create(mood: Omit<Mood, "id">) {
  const newMood: Mood = {
    id: incrementMoodId(),
    ...mood,
  };

  moods.push(newMood);
  return newMood;
}

// UPDATE mood
export function update(id: number, data: Partial<Mood>) {
  const index = moods.findIndex((m) => m.id === id);
  if (index === -1) return null;

  moods[index] = {
    ...moods[index],
    ...data,
  };

  return moods[index];
}

// DELETE mood
export function remove(id: number) {
  const index = moods.findIndex((m) => m.id === id);
  if (index === -1) return false;

  moods.splice(index, 1);
  return true;
}

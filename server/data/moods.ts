export type Mood = {
  id: number;
  userId: number;
  mood: string;
  date: string;
  comment: string;
};

//In-memory mood storage
export const moods: Mood[] = [
  // optional seed data (you can remove this later)
  {
    id: 1,
    userId: 1,
    mood: "😊 Happy",
    date: "2026-04-01",
    comment: "Good day overall",
  },
];

// ID counter (matches your workout pattern)
let nextId = 2;

export function incrementMoodId() {
  return nextId++;
}

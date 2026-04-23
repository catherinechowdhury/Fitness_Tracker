export default class Workout {
  constructor({ title, date, type, duration, moodBefore, moodAfter }) {
    if (!title || !date) {
      throw new Error("Title and date are required");
    }

    this.title = title;
    this.date = date;
    this.type = type;
    this.duration = duration;
    this.moodBefore = moodBefore;
    this.moodAfter = moodAfter;
  }
}

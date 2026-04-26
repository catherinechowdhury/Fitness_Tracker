export type DataEnvelope<T> = {
  data: T;
  isSuccess: boolean;
};

export type DataListEnvelope<T> = {
  data: T[];
  isSuccess: boolean;
  total: number;
};

export type NewMood = {
  userId: number;
  date: string;
  mood: string;
  comment: string;
};

export interface Post {
  id: string;
  title: string;
  content: string;
  image?: string | null;
  date: string;
  tags: string[];
  type: "text" | "image" | "mixed" | "color";
}

export interface MoodBoardData {
  posts: Post[];
}

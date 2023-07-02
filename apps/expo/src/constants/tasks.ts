import { Ionicons } from "@expo/vector-icons";

export enum TaskType {
  Habit,
  FiveDays,
  MonMode,
}

export interface ITask {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  id: number;
  type: TaskType;
}

export const TASKS: ITask[] = [
  {
    title: "Exercise daily",
    icon: "fitness",
    iconColor: "#FBBF24",
    id: 1,
    type: TaskType.Habit,
  },
  {
    title: "Eat mindfully",
    icon: "restaurant",
    iconColor: "#EF4444",
    id: 2,
    type: TaskType.MonMode,
  },
  {
    title: "Read a book",
    icon: "book",
    iconColor: "#10B981",
    id: 3,
    type: TaskType.Habit,
  },
  {
    title: "Practice yoga",
    icon: "fitness",
    iconColor: "#84cc16",
    id: 4,
    type: TaskType.Habit,
  },
  {
    title: "Meditate regularly",
    icon: "brush",
    iconColor: "#dc2626",
    id: 5,
    type: TaskType.FiveDays,
  },
  {
    title: "Learn an instrument",
    icon: "musical-notes",
    iconColor: "#4ade80",
    id: 6,
    type: TaskType.Habit,
  },
  {
    title: "Volunteer your time",
    icon: "people",
    iconColor: "#0ea5e9",
    id: 7,
    type: TaskType.Habit,
  },
  {
    title: "Write in journal",
    icon: "journal",
    iconColor: "#f43f5e",
    id: 8,
    type: TaskType.MonMode,
  },
  {
    title: "Hydrate throughout day",
    icon: "water",
    iconColor: "#0ea5e9",
    id: 9,
    type: TaskType.Habit,
  },
  {
    title: "Exercise daily",
    icon: "aperture",
    iconColor: "#fb923c",
    id: 10,
    type: TaskType.Habit,
  },
  {
    title: "Eat mindfully",
    icon: "pizza",
    iconColor: "#f59e0b",
    id: 11,
    type: TaskType.MonMode,
  },
  {
    title: "Read a book",
    icon: "book",
    iconColor: "#84cc16",
    id: 12,
    type: TaskType.Habit,
  },
];

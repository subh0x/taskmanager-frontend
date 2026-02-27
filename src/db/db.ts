import Dexie, { type EntityTable } from 'dexie';
import { ulid } from 'ulid';

// ULID-based ID types for local-first architecture
type TaskId = string;
type UserId = string;

interface Task {
  id: TaskId;
  title: string;
  priority: 'high' | 'medium' | 'low';
  tags: string[];
  dueDate?: Date;
  createdAt: Date;
  updatedAt?: Date;
  completed: boolean;
  createdBy: UserId;
  parentTaskId?: TaskId;
}

interface User {
  id: UserId;
  username: string;
  createdAt: Date;
}

const db = new Dexie('TasksDB') as Dexie & {
  tasks: EntityTable<Task, 'id'>;
  users: EntityTable<User, 'id'>;
};

// Initialize database schema
db.version(1).stores({
  tasks: 'id, createdAt, completed, priority, createdBy, parentTaskId',
  users: 'id, username',
});

// Helper function to generate ULID
function generateId(): string {
  return ulid();
}

export type { Task, TaskId, User, UserId };
export { db, generateId };

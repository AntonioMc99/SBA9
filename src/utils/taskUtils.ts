import type { TaskItemProps } from '../../types';


export const createTask = (data: {
  title: string;
  description?: string;
  priority: Priority;
  dueDate?: string;
}): Task => ({
  id: generateId(),
  title: data.title.trim(),
  description: data.description?.trim() || '',
  priority: data.priority,
  status: 'pending',
  dueDate: data.dueDate || '',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});


import React from 'react';
import { CheckIcon, TrashIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import type { TaskItemProps } from '../../types';
import { formatDate, isOverdue, getPriorityColor } from '../../utils/taskUtils';

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  const overdue = isOverdue(task);
  const priorityColorClass = getPriorityColor(task.priority);



export default TaskItem;
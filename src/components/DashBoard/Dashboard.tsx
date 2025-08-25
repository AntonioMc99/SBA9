import React, { useState, useEffect, useCallback } from 'react';
import {
  SunIcon,
  MoonIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';

import type {
  Task,
  TaskFormData,
  FilterOptions,
  SortOptions,
  DashboardProps,
  TaskStats,
} from '../../types';

import {
  createTask,
  filterTasks,
  sortTasks,
  calculateStats,
  saveTasksToStorage,
  loadTasksFromStorage,
  exportTasksToJSON,
  importTasksFromJSON,
} from '../../utils/taskUtils';

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode, onThemeToggle }) => {
  // state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    status: 'all',
    priority: 'all',
    search: '',
  });
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: 'createdAt',
    order: 'desc',
  });

  // load on mount
  useEffect(() => {
    const saved = loadTasksFromStorage();
    setTasks(saved);
  }, []);

  // persist on change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  // derived
  const processedTasks = React.useMemo(() => {
    const filtered = filterTasks(tasks, filters);
    return sortTasks(filtered, sortOptions);
  }, [tasks, filters, sortOptions]);

  const stats: TaskStats = React.useMemo(() => calculateStats(tasks), [tasks]);

  // handlers
  const handleAddTask = useCallback((data: TaskFormData) => {
    const newTask = createTask(data);
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const handleToggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === 'completed' ? 'pending' : 'completed',
              updatedAt: new Date().toISOString(),
            }
          : t
      )
    );
  }, []);


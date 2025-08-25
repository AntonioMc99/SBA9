import React from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import type { TaskFilterProps, Priority, TaskStatus } from '../../types';

const TaskFilter: React.FC<TaskFilterProps> = ({
  filters,
  sortOptions,
  onFilterChange,
  onSortChange,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  
export default TaskFilter;

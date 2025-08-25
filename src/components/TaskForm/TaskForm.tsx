import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { TaskFormProps, Priority } from '../../types';

import { validateTaskData } from '../../utils/taskUtils';

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as Priority,
    dueDate: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        priority: initialData.priority || 'medium',
        dueDate: initialData.dueDate || ''
      });
    }
  }, [initialData]);

 

export default TaskForm;
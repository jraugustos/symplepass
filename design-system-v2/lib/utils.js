/**
 * Utility functions for shadcn/ui
 */

/**
 * Class Name Utility (cn)
 * Combines class names with conditional logic
 * Similar to clsx but simplified for vanilla JS
 */
function cn(...inputs) {
  const classes = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const key in input) {
        if (input[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/**
 * Format currency to Brazilian Real
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

/**
 * Format date to Brazilian format
 */
function formatDate(date, format = 'short') {
  const d = new Date(date);

  if (format === 'full') {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d);
  }

  if (format === 'short') {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(d);
  }

  return new Intl.DateTimeFormat('pt-BR').format(d);
}

/**
 * Truncate text with ellipsis
 */
function truncate(str, length = 50) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Generate unique ID
 */
function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export for use in components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cn,
    formatCurrency,
    formatDate,
    truncate,
    generateId,
    debounce
  };
}
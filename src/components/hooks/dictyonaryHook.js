import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const useDictionaryHook = () => {
  const categories = useSelector((state) => state.data.categories);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const toLowerCase = (string) => {
    return string.toLowerCase();
  };

  const capitalizedCategories = categories.map((category) =>
    capitalizeFirstLetter(category.toLowerCase())
  );

  const customInputRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const customInput = customInputRef.current;
    const input = inputRef.current;
    const dropdown = dropdownRef.current;
    const dropdownItems = dropdown.querySelectorAll('li');

    const handleClick = () => {
      dropdown.style.display = 'flex';
    };

    const handleDropdownItemClick = (item) => {
      input.value = capitalizeFirstLetter(item.textContent.toLowerCase());
      dropdown.style.display = 'none';
    };

    const handleDocumentClick = (e) => {
      if (!customInput.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    };

    if (customInput && input && dropdown) {
      input.addEventListener('click', handleClick);

      dropdownItems.forEach((item) => {
        item.addEventListener('click', () => handleDropdownItemClick(item));
      });

      document.addEventListener('click', handleDocumentClick);

      return () => {
        input.removeEventListener('click', handleClick);
        dropdownItems.forEach((item) =>
          item.removeEventListener('click', handleDropdownItemClick)
        );
        document.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [categories]);

  return {
    categories: capitalizedCategories,
    customInputRef,
    inputRef,
    dropdownRef,
    capitalizeFirstLetter,
    toLowerCase,
  };
};

export const configValue = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.preventDefault();
  const value = (e.target as HTMLElement).textContent;

  return value.toLowerCase() === 'все' ? '' : value;
};

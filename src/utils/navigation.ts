export const scrollToSection = (sectionId: string, pathname: string = '/') => {
  if (window.location.pathname !== pathname) {
    window.location.href = `${pathname}#${sectionId}`;
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const handleScrollOnLoad = () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
};

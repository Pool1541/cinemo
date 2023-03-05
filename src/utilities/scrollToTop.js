export default function scrollToTop() {
  const windowObject = window;

  windowObject.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

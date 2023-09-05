export default function wrapAlert<T, R>(f: (params: T) => R) {
  // eslint-disable-next-line consistent-return
  return (params: T) => {
    try {
      return f(params);
    } catch (error) {
      console.error(error);
      // eslint-disable-next-line no-alert
      alert('An error occurred. Please check the console for more information.');
    }
  };
}

export default function wrapLogging<T>(component: (props: T) => JSX.Element) {
  return (props: T) => {
    // eslint-disable-next-line no-console
    console.log('props', props);
    return component(props);
  };
}

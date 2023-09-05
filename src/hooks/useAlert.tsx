import wrapAlert from '@/util/wrapAlert';

export default function useAlert() {
  // alert can be replaced by toast
  return {
    wrapAlert,
  };
}

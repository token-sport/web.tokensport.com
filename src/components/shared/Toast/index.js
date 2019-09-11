import { toast } from 'react-toastify';

const Toast = (message, position, isError) => {
  const options = {
    position: toast.POSITION[position],
    className: 'dark-toast',
    bodyClassName: 'body-dark-toast',
    progressClassName: isError ? 'dark-progress-error-toast': 'dark-progress-success-toast'
  }

  return toast(message, options);
}

export default Toast;


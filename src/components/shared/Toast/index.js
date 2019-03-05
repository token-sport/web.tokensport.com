import React from 'react'
import { toast } from 'react-toastify';

const Toast = (type, message, position) => {
  toast[type](message, {
    position: toast.POSITION[position]
  });
}

export default Toast
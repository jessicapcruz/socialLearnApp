import { toast } from 'react-toastify';

export const notify = (message, type)=>{ 

  switch(type){
    case 'error':
      toast.error(message, {position: toast.POSITION.TOP_CENTER});
      break;
      case 'warn':
        toast.warn(message, {position: toast.POSITION.TOP_CENTER});
        break;
    default:
        toast.success(message, {position: toast.POSITION.TOP_CENTER});
      break;
  }
}
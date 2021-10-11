import { toast } from 'react-toastify';

export const notify = (message, type)=>{ 
    if (type === 'error') {
      toast.error(message) 
    } else {
      toast.success(message) 
    }
}
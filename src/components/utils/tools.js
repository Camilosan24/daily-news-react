
import { toast } from "react-toastify";

export const showToast = (type, msg) => {
	switch (type) {
		case "SUCCESS":
         console.log('works')
			toast.success(msg, { position: toast.POSITION.BOTTOM_RIGHT });
			break;

		case "ERROR":
         toast.error(msg,{position: toast.POSITION.BOTTOM_RIGHT})
			break;

		default:
			break;
	}
};

import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Added");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Error occurred");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Removed");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Remove error occured....");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("Task Status Changed");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("Task status change error occured...");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;

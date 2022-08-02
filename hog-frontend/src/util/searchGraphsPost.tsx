import {SearchConditions} from "../entities/Enquiries";
import api from "../services/Api";

export const searchGraphsPost = (conds: SearchConditions) => {
  try {
    api.post("enquiry", conds).then(response => {
      console.log(response);
      if(response.data._embedded){
        return response.data._embedded.graphSearchModelList;
      }
    });
  } catch(error) {
    console.log(error)
  }
  return [];
}
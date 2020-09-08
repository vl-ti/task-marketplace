import { FETCH_TASKS, FETCH_TASK } from "./types";
import challengeV5 from "../apis/challengeV5";

//curl -X GET "https://api.topcoder.com/v5/challenges?page=1&perPage=20&types=Task&isLightweight=false&isTask=false&taskIsAssigned=false" -H "accept: application/json" -H "Content-Type: application/json"
export const fetchTasks = () => async (dispatch) => {
  //&status=Active
  const response = await challengeV5.get(
    "?page=1&perPage=20&types=Task&isLightweight=false&isTask=false&taskIsAssigned=false",
    { accept: "application / json", "Content-Type": "application/json" }
  );
  dispatch({ type: FETCH_TASKS, payload: response.data });
};

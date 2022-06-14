import { TOKEN_KEY } from "../constants/AppConst";
import Cookies from "js-cookie";
import axios from "axios";

export const CallAPI = (
  endpoint,
  method = "GET",
  body = {},
  params = {},
  configHeaders = null,
  responseType = null
) => {
  let token = null;
  token = Cookies.get(TOKEN_KEY);
  const headers = configHeaders
    ? configHeaders
    : {
        "content-type": "application/json",
        "x-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNCIsInJvbGUiOiJhZG1pbiIsImJ1ZmZlcl90aW1lIjoiODY0MDAiLCJleHAiOjE2NjU5NTQ0NzcsImlzcyI6InFtUGx1cyIsIm5iZiI6MTY1MDI3NDg3NywiaWF0IjoxNjUwMjc0ODc3fQ.u6oa-zIi2o24oqBMU212IhLZtSXSTYUfg1R-uQqa5ig
        `,
      };
  return axios({
    method,
    url: process.env.REACT_APP_API_URL + endpoint,
    headers,
    data: body,
    responseType,
    params,
  });
};

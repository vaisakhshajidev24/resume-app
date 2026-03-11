import commonAPI from "./commonAPI";
import baseurl from "./baseurl";

/// addResumeAPI - POST
export const addResumeAPI = async (resume) => {
  return await commonAPI("POST", `${baseurl}/resumes`, resume);
};

// editresumeAPI - PUT
export const editResumeAPI = async (id, resume) => {
  return await commonAPI("PUT", `${baseurl}/resumes/${id}`, resume);
};

// addDownloadHistoryAPI - POST
export const addDownloadHistoryAPI = async (resume) => {
  return await commonAPI("POST", `${baseurl}/history`, resume);
};

// getHistoryAPI - POST
export const getHistoryAPI = async () => {
  return await commonAPI("GET", `${baseurl}/history`, {});
};

// DeleteHistoryAPI - POST
export const DeleteHistoryAPI = async (id) => {
  return await commonAPI("DELETE", `${baseurl}/history/${id}`, {});
};

//get resume api
export const getResumeAPI = async (id) => {
  return await commonAPI("GET", `${baseurl}/resumes/${id}`, {});
};

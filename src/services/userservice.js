const API_ROOT = "http://localhost:3001";
import propTypes from "prop-types";

export const getUserAsync = (userId) => fetch(`${API_ROOT}/user/${userId}`);
export const getUserActivityAsync = (userId) =>
  fetch(`${API_ROOT}/user/${userId}/activity`);
export const getUserAverageSessionsAsync = (userId) =>
  fetch(`${API_ROOT}/user/${userId}/average-sessions`);
export const getUserPerformanceAsync = (userId) =>
  fetch(`${API_ROOT}/user/${userId}/performance`);

/**
 * Asynchronous service calls to retrieve data to display the dashboard.
 * @params {userId} The ID of the User as an integer
 * @returns A object containing all the required data (user, activity, average, performance)
 */
export const getDashboardDataAsync = async (userId) => {
  const userReq = getUserAsync(userId);
  const userActivityReq = getUserActivityAsync(userId);
  const userAverageSessionsReq = getUserAverageSessionsAsync(userId);
  const userPerformanceReq = getUserPerformanceAsync(userId);

  //   const result = await Promise.all(
  //     (
  //       await Promise.all([
  //         userReq,
  //         userActivityReq,
  //         userAverageSessionsReq,
  //         userPerformanceReq,
  //       ])
  //     ).map((r) => r.json())
  //   );
  return {
    user: await (await userReq).json(),
    activity: await (await userActivityReq).json(),
    average: await (await userAverageSessionsReq).json(),
    performance: await (await userPerformanceReq).json(),
  };
};

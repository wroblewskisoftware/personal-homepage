export const getDataFromApi = async (api, reversedToken) => {
  const response = await fetch(api, {
    headers: {
      Authorization: `Bearer ${reversedToken.split("").reverse().join("")}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

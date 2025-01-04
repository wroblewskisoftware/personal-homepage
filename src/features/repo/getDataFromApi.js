export const getDataFromApi = async (api, token) => {
  const response = await fetch(api, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

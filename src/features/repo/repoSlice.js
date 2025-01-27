import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
  name: "repo",
  initialState: { repo: null, fetchRepoStatus: undefined },
  reducers: {
    fetchRepositoryFromApi: (state) => {
      state.fetchRepoStatus = "loading";
    },
    fetchRepositorySuccess: (state, action) => {
      const repoData = action.payload;
      state.repo = repoData;
      state.fetchRepoStatus = "success";
    },
    fetchRepositoryError: (state) => {
      state.repo = null;
      state.fetchRepoStatus = "error";
    },
  },
});

export const {
  fetchRepositoryFromApi,
  fetchRepositorySuccess,
  fetchRepositoryError,
} = repoSlice.actions;

export const selectRepositoryState = (state) => state.repo;
export const selectFetchRepositoryStatus = (state) =>
  selectRepositoryState(state).fetchRepoStatus;

export const selectRepositoriesList = (state) =>
  selectRepositoryState(state).repo;

export default repoSlice.reducer;

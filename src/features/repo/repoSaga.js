import { takeEvery, call, put, delay } from "redux-saga/effects";

import {
  fetchRepositoryFromApi,
  fetchRepositorySuccess,
  fetchRepositoryError,
} from "./repoSlice";
import { getDataFromApi } from "./getDataFromApi";
import { apiUrl, token } from "./apiCredentials";

function* watchFetchRepositoryHandler() {
  try {
    yield delay(2000);
    const repoData = yield call(getDataFromApi, apiUrl, token);
    yield put(fetchRepositorySuccess(repoData));
  } catch (error) {
    yield put(fetchRepositoryError());
  }
}

export function* watchFetchRepoSaga() {
  yield takeEvery(fetchRepositoryFromApi.type, watchFetchRepositoryHandler);
}

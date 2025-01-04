import { all } from "redux-saga/effects";
import { watchFetchRepoSaga } from "./features/repo/repoSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRepoSaga()
  ]);
}

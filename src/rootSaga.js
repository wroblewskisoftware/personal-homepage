import { all } from "redux-saga/effects";
import { watchFetchRepoSaga } from "./features/repo/repoSaga";
import { themeSaga } from "./features/theme/themeSaga";

export default function* rootSaga() {
  yield all([
    watchFetchRepoSaga(),
    themeSaga()
  ]);
}

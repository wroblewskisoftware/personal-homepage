import { takeEvery, select, call } from "redux-saga/effects";
import { toggleTheme, selectTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
  yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
}

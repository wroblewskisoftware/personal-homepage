import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import {
  fetchRepositoryFromApi,
  selectFetchRepositoryStatus,
} from "../repoSlice";

const Repository = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositoryFromApi());
  }, [dispatch]);

  const fetchRepositoryStatus = useSelector(selectFetchRepositoryStatus);

  return (
    <>
      {fetchRepositoryStatus === "loading" && <LoadingComponent />}
      {fetchRepositoryStatus === "error" && <ErrorComponent />}
      {fetchRepositoryStatus === "success" && <p>Repository</p>}
    </>
  );
};

export default Repository;

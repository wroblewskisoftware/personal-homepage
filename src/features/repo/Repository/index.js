import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import ProjectList from "./ProjectList";
import {
  fetchRepositoryFromApi,
  selectFetchRepositoryStatus,
  selectRepositoriesList,
} from "../repoSlice";

const Repository = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositoryFromApi());
  }, [dispatch]);

  const fetchRepositoryStatus = useSelector(selectFetchRepositoryStatus);
  const repositoriesList = useSelector(selectRepositoriesList);

  return (
    <>
      {fetchRepositoryStatus === "loading" && <LoadingComponent />}
      {fetchRepositoryStatus === "error" && <ErrorComponent />}
      {fetchRepositoryStatus === "success" && (
        <ProjectList repositoriesList={repositoriesList} />
      )}
    </>
  );
};

export default Repository;

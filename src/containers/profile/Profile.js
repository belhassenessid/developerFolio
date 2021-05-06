import React, {useState, useEffect, lazy, Suspense} from "react";
import {SomeProjects} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (SomeProjects.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            console.error(result);
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            setProfileFunction("Error");
            console.log(
              "Because of this error, contact section has reverted to default"
            );
            console.error(error);
            SomeProjects.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    SomeProjects.display &&
    SomeProjects.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}

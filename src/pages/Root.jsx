import { useEffect } from "react";
import Views from "../components/view/Views";
import { Outlet } from "react-router";
// import { useCreateGhostUser } from "@/query/queryUser-auth";
import { createGhostUser } from "@/api/authUser";

const Root = () => {
 
  // const { mutateAsync } = useCreateGhostUser();

  useEffect(() => {
    const createUser = async () => {
      try {
        await createGhostUser();
      } catch (err) {
        console.error(err);
      }
    };

    createUser();
  }, []);

  

    
    return(
        <Views>
            <Outlet />
        </Views>
    );
}

export default Root;
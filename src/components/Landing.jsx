import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ai_imag from "../assets/robot.jpg";
import { Button, Typography } from "@material-tailwind/react";

const Landing = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <div className="mt-16">
          <div className="text-right m-8">
            <Button onClick={(e) => logout()}>Logout</Button>
          </div>

          <figure className="relative h-full w-full">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={ai_imag}
              alt="AI image"
            />
            <figcaption className="absolute top-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <Typography variant="h5" color="blue-gray">
                Welcome <span className="text-blue-600">{user.name}</span> to
                Ryzup AI CFO
              </Typography>
            </figcaption>
          </figure>

          {/* <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-blue-gray-900"></h1> */}
        </div>
      ) : (
        <div className="flex flex-row min-h-screen justify-center items-center">
          <Button className="h-12 w-72" onClick={(e) => loginWithRedirect()}>
            Login to Ryzup
          </Button>
        </div>
      )}
    </div>
  );
};

export default Landing;

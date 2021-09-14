import { NavLink } from "react-router-dom";
import Button from "./utils/Button";

export default function MainMenu() {
  return (
    <>
      <div className="container">
        <h2>Paint Area</h2>
      </div>
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <NavLink className="btn btn-primary btn-lg" to="/mainline">
              Mainline
            </NavLink>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <NavLink className="btn btn-primary btn-lg" to="/spoven1">
              Spoven 1
            </NavLink>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <NavLink className="btn btn-primary btn-lg" to="/spoven2">
              Spoven 2
            </NavLink>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <NavLink className="btn btn-primary btn-lg" to="/spoven3">
              Spoven 3
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <h2>Assembly Area</h2>
      </div>
      <div className="container p-4">
        <div className="row justify-content-center">
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>PACCAR Bumpers</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Bonding 1</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Bonding 2</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Bonding 3</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Navistar Fenders</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Navistar Rear Skirts</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Navistar Front Skirts</Button>
          </div>
          <div className="col-4 col-md-6 col-xl-3 p-1">
            <Button>Navistar Bumpers</Button>
          </div>
        </div>
      </div>
    </>
  );
}

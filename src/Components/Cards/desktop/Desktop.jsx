import React from "react";
import { Group } from "../Card/Card";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="card-wrapper">
          <div className="card">
            <div className="overlap-5">
              <img
                className="vector"
                alt="Vector"
                src="https://c.animaapp.com/xet5rXTx/img/vector-2.svg"
              />
              <div className="text-wrapper-4">Created: 01/01/2000</div>
              <div className="text-wrapper-5">Updated: 01/01/2000</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <p className="text-wrapper-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-6">
                  <div className="text-wrapper-7">
                    Status : <br />
                    completed
                  </div>
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="overlap-wrapper-2">
                <div className="overlap-7">
                  <div className="text-wrapper-8">TITLE</div>
                </div>
              </div>
              <div className="overlap-wrapper-3">
                <div className="overlap-8">
                  <div className="text-wrapper-9">Assigned to : Admin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-5">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/xet5rXTx/img/vector-2.svg"
            />
            <div className="text-wrapper-4">Created: 01/01/2000</div>
            <div className="text-wrapper-5">Updated: 01/01/2000</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="text-wrapper-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-6">
                <div className="text-wrapper-7">
                  Status : <br />
                  In-Progress
                </div>
                <div className="rectangle-3" />
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-7">
                <div className="text-wrapper-8">TITLE</div>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-8">
                <div className="text-wrapper-9">Assigned to : Admin</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-5">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/xet5rXTx/img/vector-2.svg"
            />
            <div className="text-wrapper-4">Created: 01/01/2000</div>
            <div className="text-wrapper-5">Updated: 01/01/2000</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="text-wrapper-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-6">
                <div className="text-wrapper-7">
                  Status : <br />
                  Open
                </div>
                <div className="rectangle-4" />
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-7">
                <div className="text-wrapper-8">TITLE</div>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-8">
                <div className="text-wrapper-9">Assigned to : Admin</div>
              </div>
            </div>
          </div>
        </div>
        <Group className="group-8" />
      </div>
    </div>
  );
};

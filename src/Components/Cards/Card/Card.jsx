import React from "react";
import "./style.css";

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <div className="card-with-popup">
        <div className="overlap">
          <img
            className="button-to-open-popup"
            alt="Button to open popup"
            src="https://c.animaapp.com/xet5rXTx/img/vector-2.svg"
          />
          <div className="text-wrapper">Created: 01/01/2000</div>
          <div className="div">Updated: 01/01/2000</div>
          <div className="overlap-group">
            <div className="descrption">
              <div className="div-wrapper">
                <p className="p">
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
            <div className="popup-for-delete-and">
              <img
                className="delete-sweep"
                alt="Delete sweep"
                src="https://c.animaapp.com/xet5rXTx/img/delete-sweep-1@2x.png"
              />
              <img
                className="edit-square"
                alt="Edit square"
                src="https://c.animaapp.com/xet5rXTx/img/edit-square-1@2x.png"
              />
            </div>
          </div>
          <div className="status">
            <div className="overlap-2">
              <div className="status-completed">
                Status : <br />
                completed
              </div>
              <div className="rectangle" />
            </div>
          </div>
          <div className="title">
            <div className="overlap-3">
              <div className="text-wrapper-2">TITLE</div>
            </div>
          </div>
          <div className="assign-user-username">
            <div className="overlap-4">
              <div className="text-wrapper-3">Assigned to : Admin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const AboutMe = (props) => {
  const [aboutMeToggle, setAboutMeToggle] = useState(false);
  const toggleAboutMe = () => {
    setAboutMeToggle(!aboutMeToggle);
  };
  const [userAboutMe, setUserAboutMe] = useState("");
  const changeAboutMe = (newAboutMe) => {
    setUserAboutMe(newAboutMe);
  };
  return (
    <div>
      {/* ABOUT ME */}
      <div className="break"></div>
      <div className="about-me-cont">
        {props.userAboutMe != null && props.edit ? (
          <form
            details={props.userAboutMe}
            key={props.currentUser.id}
            onSubmit={(e) => props.updateUserAboutMe(e, userAboutMe)}
          >
            <StyledInput
              type="text"
              className="sidebar-StyledInput"
              defaultValue={props.userAboutMe}
              //   StyledInputStyle={{ color: "#212529" }}
              placeholder="add a description"
              onChange={(e) => changeAboutMe(e.target.value)}
            ></StyledInput>
          </form>
        ) : (
          <p
            style={{
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              flexStyle: "wrap",
            }}
            onClick={() => setAboutMeToggle()}
          >
            {props.userAboutMe}
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutMe;

const StyledInput = styled.input`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  font-family: Helvetica, sans-serif;
  width: 240px;
  color: #757575;
`;

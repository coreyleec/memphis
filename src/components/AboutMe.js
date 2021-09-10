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
const submitAboutMe = (e) => {
    if (e.key == 'Enter' && e.shiftKey == false) {props.updateUserAboutMe(e, userAboutMe)}
}

  return (
    <div>
      <div className="break"></div>
        {props.userAboutMe != null && props.edit ? (
          <form
            onKeyDown={(e) => submitAboutMe(e)}
            details={props.userAboutMe}
            key={props.currentUser.id}
            onSubmit={(e) => props.updateUserAboutMe(e, userAboutMe)}
          >
            <StyledInput
              type="textarea"
              rows="3"
              className="sidebar-StyledInput"
              defaultValue={props.userAboutMe}
              placeholder="add a description"
              onChange={(e) => changeAboutMe(e.target.value)}
            ></StyledInput>
          </form>
        ) : (
          <AboutMeP onClick={() => setAboutMeToggle()}>
            {props.userAboutMe}
          </AboutMeP>
        )}
      </div>
    // </div>
  );
};

export default AboutMe;

const StyledInput = styled.textarea`
  background-color: inherit;
  overflow: hidden;
  resize: none;
  padding: 0;
  line-height: 1.5;
  border-width: 0;
  margin-top: 0;
  font-size: 1rem;
  height: fit-content;
  margin-bottom: 1rem;
  text-align: left;
  font-family: Helvetica, sans-serif;
  width: 100%;
  color: #757575;
`;

const AboutMeP = styled.p`
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    color: black;
    `

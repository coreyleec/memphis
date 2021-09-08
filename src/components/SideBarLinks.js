import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SideBarLinks = (props) => {
  // ADD LINK STATE TOGGLE
  const [newLink, setNewLink] = useState(false);
  const newLinkToggle = () => {
    setNewLink(!newLink);
  };
  const [linkName, setLinkName] = useState("");
  const changeLinkName = (linkName) => {
    setLinkName(linkName);
  };
  const [linkUrl, setLinkUrl] = useState();

  return (
    <>
      {/* LINK FORM TOGGLE */}
      <div className="add-item">
        <p className="add-item-p">links</p>
        {props.edit && (
          <button
            className="side-bar-add-button"
            onClick={() => {
              setNewLink(!newLink);
            }}
          >
            +
          </button>
        )}
      </div>
      {/* NEW LINK FORM */}
      {newLink && props.edit && (
        <form
          type="submit"
          onSubmit={(e) => props.addLink(e, linkName, linkUrl)}
        >
          <StyledInput
            type="text"
            placeholder="enter link name"
            onChange={(e) => setLinkName(e.target.value)}
          ></StyledInput>
          <StyledInput
            type="text"
            placeholder="enter link url"
            onChange={(e) => setLinkUrl(e.target.value)}
          ></StyledInput>
          <StyledInput
            type="submit"
            value="submit"
            style={{ display: "none" }}
          ></StyledInput>
        </form>
      )}
      {/* EDIT LINK */}
      {props.userLinks != undefined && props.userLinks != null && props.edit ? (
        props.userLinks.map((link) => (
          <form
            link={link}
            key={link.id}
            onSubmit={(e) => props.updateLink(e, linkName, linkUrl, link)}
          >
            {/* LINK NAME INPUT*/}
            <StyledInput
              type="text"
              defaultValue={link.name}
              // className="sidebar-form"
              // value={link.name}
              onChange={(e) => changeLinkName(e.target.value)}
            ></StyledInput>
            {/* LINK URL INPUT */}
            <StyledUrl
              type="text"
              defaultValue={link.url}
              // className="sidebar-form"
              // value={link.url}
              onChange={(e) => {
                setLinkUrl(e.target.value);
              }}
            ></StyledUrl>
            <StyledInput
              type="submit"
              value="submit"
              style={{ display: "none" }}
            ></StyledInput>
          </form>
        ))
      ) : (
        <div className="link-cont">
          {props.userLinks.map((link) => (
            <a href={link.url}> {link.name} </a>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarLinks;

const StyledInput = styled.input`
  font-size: 2rem;
  padding: 0px;
  text-align: left;
  width: 75%;
  color: #757575;
`;

const StyledUrl = styled.textarea`
  background-color: inherit;
  resize: none;
  padding: 0;
  line-height: 1.5;
  border-width: 0;
  font-size: 1rem;
  text-align: left;
  width: 95%;
  color: #757575;
  
`;

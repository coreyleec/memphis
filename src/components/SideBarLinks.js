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
    <div>
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
            onChange={(e) => changeLinkName(e.target.value)}
          ></StyledInput>
          <StyledInput
            type="text"
            placeholder="enter link url"
            onChange={(e) => changeLinkName(e.target.value)}
          ></StyledInput>
        </form>
      )}
      {/* EDIT LINK */}
      {
        props.userLinks != undefined &&
        props.userLinks != null &&
        props.edit ? (
          props.userLinks.map((link) => (
            <form
              link={link}
              key={link.id}
              onSubmit={(e) => props.updatelink(e, linkName, linkUrl)}
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
              <StyledInput
                type="text"
                defaultValue={link.url}
                // className="sidebar-form"
                // value={link.url}
                onChange={(e) => {
                  setLinkUrl(e.target.value);
                }}
              ></StyledInput>
            </form>
          ))
        ) : (
          <div className="link-cont">
            {props.userLinks.map((link) => (
              <a href={link.url}> {link.name} </a>
            ))}
          </div>
        )
        // <a href="https://example.com/faq.html"> FAQ </a>
        // <p onClick={(e) => props.clickLink(link.id)} link={link} key={link.id}>{link.name}</p>
      }
    </div>
  );
};

export default SideBarLinks;

const StyledInput = styled.input`
  font-size: 2rem;
  text-align: left;
  font-family: Helvetica, sans-serif;
  width: 240px;
  color: #757575;
`;
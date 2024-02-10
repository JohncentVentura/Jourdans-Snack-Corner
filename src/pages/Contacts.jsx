import React from 'react'
import { UtilSetContainer } from "../Utilities";

const Contacts = () => {
  return (
    <>
      <UtilSetContainer
        style={{ paddingTop: "6.5rem", paddingBottom: "100vh" }}
        bgImgSrc={
          "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        }
      >
        <div className="display-1">Contact Us</div>
      </UtilSetContainer>
    </>
  )
}

export default Contacts
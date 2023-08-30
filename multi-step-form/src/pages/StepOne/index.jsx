import React from "react";

const StepOne = () => {
  return (
    <>
      <div className="mobileTopBar">
        <div className="mobileTopBarContainer">
          <span className="numberCircle active">1</span>
          <span className="numberCircle ">2</span>
          <span className="numberCircle ">3</span>
          <span className="numberCircle ">4</span>
        </div>
      </div>
      <div className="mainContainer">
        <div className="desktopSideBar">
          <div className="desktopSideBarContainer">
            <div className="step1Container">
              <span className="numberCircle active">1</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 1</p>
                <p className="desktopSideBarText">your info</p>
              </div>
            </div>
            <div className="step2Container">
              <span className="numberCircle">2</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 2</p>
                <p className="desktopSideBarText">select plan</p>
              </div>
            </div>
            <div className="step3Container">
              <span className="numberCircle">3</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 3</p>
                <p className="desktopSideBarText">add-ons</p>
              </div>
            </div>
            <div className="step4Container">
              <span className="numberCircle">4</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 4</p>
                <p className="desktopSideBarText">summary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="personalInfoContainer">
            <h1 className="step1Header">Personal info</h1>
            <p className="step1SubText">
              Please provide your name, email address, and phone number.
            </p>

            <label className="name-label" for="name-input">
              Name
            </label>
            <input
              required
              id="name-input"
              className="name-input"
              type="text"
              placeholder="e.g. Stephen King"
            ></input>
            <label className="email-label" for="email-input">
              Email Address
            </label>
            <input
              required
              id="email-input"
              className="email-input"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
            ></input>
            <label className="phone-label" for="phone-input">
              Phone Number
            </label>
            <input
              required
              id="phone-input"
              className="phone-input"
              type="text"
              placeholder="e.g. +44 0123 456 789"
            ></input>

            <button className="desktopNextStepBtn">Next Step</button>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <button className="mobileNextStepBtn">Next Step</button>
      </div>
    </>
  );
};

export default StepOne;

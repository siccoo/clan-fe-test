import React from 'react'

const StepFour = () => {
  return (
    <>
      <div className="mobileTopBar">
        <div className="mobileTopBarContainer">
          <span className="numberCircle">1</span>
          <span className="numberCircle">2</span>
          <span className="numberCircle">3</span>
          <span className="numberCircle active">4</span>
        </div>
      </div>
      <div className="mainContainer">
        <div className="desktopSideBar">
          <div className="desktopSideBarContainer">
            <div className="step1Container">
              <span className="numberCircle">1</span>
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
              <span className="numberCircle active">4</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 4</p>
                <p className="desktopSideBarText">summary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="summaryContainer">
            <h1 className="step1Header">Finishing up </h1>
            <p className="step1SubText">
              Double-check everything looks OK before confirming.
            </p>
            <div className="summaryContentContainer">
              <div className="summaryPlanType">
                <div>
                  <p className="summaryPlanTypeName">
                     (Monthly)
                  </p>
                  <a href="/select-plan">
                    <p className="summaryPlanTypeChange">Change</p>
                  </a>
                </div>
                <p className="summaryPlanTypePrice">
                £0/mo
                </p>
              </div>
              <div className="summaryLine" ></div>
              <div className="summaryAddOn hide" >
                <p className="summaryAddOnName">Online service</p>
                <p
                  className="summaryAddOnPrice"
                >
                  +£1/mo
                </p>
                <p
                  className="summaryAddOnPrice hide"
                >
                  +£10/yr
                </p>
              </div>
              <div className="summaryAddOn hide" >
                <p className="summaryAddOnName">Larger storage</p>
                <p
                  className="summaryAddOnPrice"
                >
                  +£2/mo
                </p>
                <p
                  className="summaryAddOnPrice hide"
                >
                  +£20/yr
                </p>
              </div>
              <div className="summaryAddOn hide" >
                <p className="summaryAddOnName">Customisable profile</p>
                <p
                  className="summaryAddOnPrice"
                >
                  +£2/mo
                </p>
                <p
                  className="summaryAddOnPrice hide"
                >
                  +£20/yr
                </p>
              </div>
            </div>
            <div className="summaryTotalContainer">
              <p className="summaryTotalText">Total (per month)</p>
              <p className="summaryTotalPrice">
              £2/mo
              </p>
            </div>
            <div className=""></div>
            <div className="desktopBtnContainer">
              <a href="/add-ons">
                <button className="desktopBackBtn">Go Back</button>
              </a>
              <a href="/thank-you">
                <button className="desktopConfirmBtn">Confirm</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <a href="/add-ons">
          <button className="mobileBackBtn">Go Back</button>
        </a>
        <a href="/thank-you">
          <button className="mobileConfirmBtn">Confirm</button>
        </a>
      </div>
    </>
  )
}

export default StepFour;
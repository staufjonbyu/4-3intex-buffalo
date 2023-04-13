import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

function CookieBanner() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieAccepted")) {
      setCookieAccepted(true);
    }
  }, []);

  return (
    <>
      {!cookieAccepted && (
        <CookieConsent
          debug={true}
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling) {
              // triggered if user scrolls past threshold
              alert("Accept was triggered by user scrolling");
            } else {
              alert("Accept was triggered by clicking the Accept button");
            }
            localStorage.setItem("cookieAccepted", true);
            setCookieAccepted(true);
          }}
          enableDeclineButton
          onDecline={() => {
            alert("nay!");
          }}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
      )}
    </>
  );
}

export default CookieBanner;

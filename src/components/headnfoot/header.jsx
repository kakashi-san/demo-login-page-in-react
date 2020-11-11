import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header
        id="masthead"
        className="site-header"
        style={{
          display: "block",
          backgroundColor: "#fff",
          borderBottom: "none",
          paddingTop: "10px",
          position: "relatiive",
          width: "100%",
          zIndex: 9003
        }}
        bgcolor="#ffffff"
        width="100%"
      >
        <div
          className="site-branding"
          style={{
            height: "32px",
            marginBottom: "14px",
            marginLeft: "15px",
            position: "relative",
            width: "86px"
          }}
          height={32}
          width={86}
        >
          <a
            href="https://www.sc.com/en/"
            className="custom-logo-link"
            rel="home"
            style={{
              backgroundColor: "transparent",
              color: "#364655",
              textDecoration: "none",
              transition: "0.4s"
            }}
          >
            <img
              width={256}
              height="auto"
              src="https://av.sc.com/corp-en/content/images/standardchartered@2x.png"
              className="custom-logo"
              alt="Standard Chartered"
              style={{
                border: 0,
                height: "auto",
                maxWidth: "100%"
              }}
            />
          </a>{" "}
        </div>
        {}
        <nav
          id="site-navigation"
          className="main-navigation"
          style={{
            display: "block",
            marginTop: "17px"
          }}
        >
          <div
            className="mobile-navigation"
            style={{
              borderLeft: "1px solid #edf0f2",
              height: "60px",
              position: "absolute",
              right: 0,
              top: 0,
              width: "60px"
            }}
            height={60}
            width={60}
          >
            <button
              className="hamburger js-hamburger menu-toggle"
              aria-controls="primary-menu"
              aria-expanded="false"
              style={{
                color: "inherit",
                font: "inherit",
                margin: 0,
                overflow: "visible",
                textTransform: "none",
                WebkitAppearance: "button",
                cursor: "pointer",
                fontFamily:
                  "SC Sans, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: "0.75rem",
                lineHeight: 1,
                background: "#e6e6e6",
                border: 0,
                borderColor: "#ccc #ccc #bbb",
                borderRadius: "3px",
                padding: 0,
                display: "inline-block",
                backgroundColor: "transparent",
                outline: "none",
                position: "absolute",
                right: "15px",
                top: "18px",
                transitionDuration: "0.15s",
                transitionProperty: "opacity, filter, -webkit-filter",
                transitionTimingFunction: "linear"
              }}
            >
              <span
                className="hamburger-box"
                style={{
                  display: "inline-block",
                  height: "24px",
                  position: "relative",
                  width: "24px"
                }}
                height={24}
                width={24}
              >
                <span
                  className="hamburger-inner"
                  style={{
                    marginTop: "-2px",
                    top: "50%",
                    backgroundColor: "#008738",
                    borderRadius: "4px",
                    content: "",
                    display: "block",
                    height: "2px",
                    position: "absolute",
                    transitionDuration: "0.15s",
                    transitionProperty: "transform",
                    transitionTimingFunction: "ease",
                    width: "24px"
                  }}
                  bgcolor="#008738"
                  height={2}
                  width={24}
                />
              </span>
              <span
                className="screen-reader-text"
                style={{
                  clip: "rect(1px, 1px, 1px, 1px)",
                  height: "1px",
                  overflow: "hidden",
                  width: "1px",
                  WebkitClipPath: "inset(50%)",
                  border: 0,
                  clipPath: "inset(50%)",
                  margin: "-1px",
                  padding: 0,
                  position: "absolute",
                  wordWrap: "normal"
                }}
                height={1}
                width={1}
              >
                Navigate this page{" "}
              </span>
            </button>
          </div>
          <div
            className="menu-main-menu-container"
            style={{
              opacity: 0,
              transition: "all 0.3s ease",
              visibility: "visible",
              width: "100%"
            }}
            width="100%"
          >
            <ul
              id="primary-menu"
              className="menu"
              style={{
                margin: 0,
                listStyle: "none",
                fontSize: "1.125rem",
                lineHeight: "1.5",
                marginBottom: "20px",
                fontWeight: 100,
                display: "none",
                paddingLeft: 0,
                textAlign: "center",
                backgroundColor: "#0756af",
                boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
              }}
              align="center"
              bgcolor="#0756af"
            >
              <li
                id="menu-item-6185"
                className="countryselect country-popup menu-item menu-item-type-custom menu-item-object-custom menu-item-6185"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none",
                  backgroundColor: "#008738"
                }}
                align="left"
                bgcolor="#008738"
              >
                <a
                  href="https://www.sc.com/en/#country-popup"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative",
                    backgroundImage: 'url("data:image/png',
                    backgroundPosition: "right 15px bottom 10px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "24px"
                  }}
                >
                  Visit local site
                </a>
              </li>
              <li
                id="menu-item-27"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-27"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/banking/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  Banking
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38773"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38773"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38779"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38779"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      Banking
                    </a>
                  </li>
                  <li
                    id="menu-item-38787"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38787"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/banking/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Banking services
                    </a>
                  </li>
                  <li
                    id="menu-item-38789"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38789"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/banking/banking-for-individuals/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Banking for individuals
                    </a>
                  </li>
                  <li
                    id="menu-item-38788"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38788"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/banking/banking-for-companies/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Banking for companies
                    </a>
                  </li>
                  <li
                    id="menu-item-38804"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38804"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/banking/islamic-banking/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Islamic Banking
                    </a>
                  </li>
                  <li
                    id="menu-item-66426"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66426"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/banking/belt-and-road/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Belt and Road
                    </a>
                  </li>
                  <li
                    id="menu-item-51088"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51088"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/banking/libor/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      LIBOR and Other Benchmarks
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-21906"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21906"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/careers/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  Careers
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38778"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38778"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38785"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38785"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      Careers
                    </a>
                  </li>
                  <li
                    id="menu-item-38793"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38793"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/careers/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Working at Standard Chartered
                    </a>
                  </li>
                  <li
                    id="menu-item-38820"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38820"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/careers/jobseekers/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Jobseekers
                    </a>
                  </li>
                  <li
                    id="menu-item-38821"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38821"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/careers/our-employee-stories/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Our employee stories
                    </a>
                  </li>
                  <li
                    id="menu-item-75422"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75422"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/careers/early-careers/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Early careers
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-26"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/investors/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  Investors
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38775"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38775"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38782"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38782"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      Investors
                    </a>
                  </li>
                  <li
                    id="menu-item-38803"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38803"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/investors/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Investors hub
                    </a>
                  </li>
                  <li
                    id="menu-item-60015"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-60015"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/investors/financial-results/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Financial results
                    </a>
                  </li>
                  <li
                    id="menu-item-38816"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38816"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/investors/shareholder-information/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Shareholder information
                    </a>
                  </li>
                  <li
                    id="menu-item-38798"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38798"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/investors/credit-ratings-fixed-income/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Credit ratings and fixed income
                    </a>
                  </li>
                  <li
                    id="menu-item-38799"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38799"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/investors/events-and-presentations/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Investor events
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-28"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-28"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/about/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  About Us
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38772"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38772"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38780"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38780"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      About us
                    </a>
                  </li>
                  <li
                    id="menu-item-38786"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38786"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/about/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      About us
                    </a>
                  </li>
                  <li
                    id="menu-item-75741"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-75741"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/about/hereforgood/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Here for good
                    </a>
                  </li>
                  <li
                    id="menu-item-59916"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59916"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/about/diversity-and-inclusion/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Diversity & inclusion
                    </a>
                  </li>
                  <li
                    id="menu-item-38811"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38811"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/about/our-people/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Our people
                    </a>
                  </li>
                  <li
                    id="menu-item-38807"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38807"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/our-locations/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Our locations
                    </a>
                  </li>
                  <li
                    id="menu-item-38794"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38794"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/contact-us/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-7313"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-7313"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/sustainability/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  Sustainability
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38774"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38774"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38781"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38781"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li
                    id="menu-item-38815"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38815"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/sustainability/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li
                    id="menu-item-38796"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38796"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/sustainability/contributing-to-sustainable-economic-growth/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Sustainable finance
                    </a>
                  </li>
                  <li
                    id="menu-item-49982"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49982"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/sustainability/being-responsible-company/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Responsible company
                    </a>
                  </li>
                  <li
                    id="menu-item-38814"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38814"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/sustainability/investing-in-communities/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Inclusive communities
                    </a>
                  </li>
                  <li
                    id="menu-item-50890"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50890"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/sustainability/investing-in-communities/scfoundation/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Standard Chartered Foundation
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-24"
                className="insightsmenu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/insights/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  Insights
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38776"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38776"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38784"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38784"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      Insights
                    </a>
                  </li>
                  <li
                    id="menu-item-38802"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38802"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/insights/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Latest articles
                    </a>
                  </li>
                  <li
                    id="menu-item-38795"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38795"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/insights/collections/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Collections
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-23"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-23"
                style={{
                  borderTop: "1px solid #edf0f2",
                  padding: 0,
                  position: "static",
                  textAlign: "left",
                  transition: "background-color 0.6s ease",
                  borderBottom: "1px solid #edf0f2",
                  border: "none"
                }}
                align="left"
              >
                <a
                  href="https://www.sc.com/en/media/"
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "0.4s",
                    display: "block",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    paddingBottom: "12px",
                    paddingTop: "12px",
                    zIndex: 8,
                    padding: "12px 15px",
                    position: "relative"
                  }}
                >
                  Media
                  <span
                    className="chevron"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundPosition: "right 25px top 15px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "8px 12px",
                      content: "",
                      cursor: "pointer",
                      height: "46px",
                      position: "absolute",
                      right: 0,
                      top: 0,
                      width: "100%",
                      zIndex: 4
                    }}
                    height={46}
                    width="100%"
                  />
                </a>
                <ul
                  className="sub-menu"
                  style={{
                    margin: 0,
                    listStyle: "none",
                    fontSize: "1.125rem",
                    lineHeight: "1.5",
                    marginBottom: 0,
                    fontWeight: 100,
                    marginLeft: "1.5em",
                    display: "block",
                    paddingLeft: 0,
                    textAlign: "center",
                    boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
                    float: "left",
                    left: "100%",
                    position: "absolute",
                    top: "auto",
                    zIndex: 99999,
                    backgroundColor: "#0756af",
                    width: "100%",
                    minHeight: "400px"
                  }}
                  align="center"
                  bgcolor="#0756af"
                  width="100%"
                >
                  <li
                    id="menu-item-38777"
                    className="back-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-38777"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px",
                        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)"
                      }}
                      width="100%"
                    >
                      Menu
                    </a>
                  </li>
                  <li
                    id="menu-item-38783"
                    className="back-title menu-item menu-item-type-custom menu-item-object-custom menu-item-38783"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "1.5rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "15px"
                      }}
                      width="100%"
                    >
                      Media
                    </a>
                  </li>
                  <li
                    id="menu-item-38819"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38819"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/media/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Media resources
                    </a>
                  </li>
                  <li
                    id="menu-item-38824"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38824"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/media/press-releases/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Press releases
                    </a>
                  </li>
                  <li
                    id="menu-item-38797"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38797"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/media/media-contacts/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Contacts
                    </a>
                  </li>
                  <li
                    id="menu-item-38791"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38791"
                    style={{
                      borderTop: "1px solid #edf0f2",
                      padding: 0,
                      position: "relative",
                      textAlign: "left",
                      transition: "0.6s",
                      borderBottom: "1px solid #edf0f2",
                      border: "none",
                      display: "block",
                      paddingLeft: 0,
                      paddingRight: 0
                    }}
                    align="left"
                  >
                    <a
                      href="https://www.sc.com/en/media/asset-library/"
                      style={{
                        backgroundColor: "transparent",
                        color: "#fff",
                        textDecoration: "none",
                        transition: "0.4s",
                        display: "block",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        paddingBottom: "12px",
                        paddingTop: "12px",
                        zIndex: 8,
                        padding: "12px 15px",
                        position: "relative",
                        width: "100%",
                        paddingLeft: "30px"
                      }}
                      width="100%"
                    >
                      Asset and logo library
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>{" "}
        </nav>
        {}
        <div
          className="select-online"
          style={{
            msFlexItemAlign: "end",
            msFlexOrder: 4,
            alignSelf: "flex-end",
            backgroundColor: "#fff",
            borderLeft: "1px solid #edf0f2",
            display: "table",
            height: "60px",
            order: 4,
            position: "absolute",
            right: "60px",
            top: 0,
            transition: "background-color 0.6s ease",
            width: "60px"
          }}
          bgcolor="#ffffff"
          height={60}
          width={60}
        >
          <a
            className="country-popup online-banking-popup"
            href="https://www.sc.com/en/#country-popup"
            data-location="online"
            style={{
              backgroundColor: "transparent",
              color: "#008738",
              textDecoration: "none",
              transition: "0.4s",
              backgroundImage: 'url("data:image/png',
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "15px",
              display: "table-cell",
              height: "60px",
              lineHeight: "20px",
              paddingLeft: "22px",
              paddingRight: "32px",
              textAlign: "center",
              verticalAlign: "middle"
            }}
            height={60}
            align="center"
            valign="middle"
          >
            <span
              style={{
                display: "none"
              }}
            >
              Online banking{" "}
            </span>
          </a>
        </div>
        {}
        <div
          className="header-search"
          style={{
            msFlexItemAlign: "end",
            msFlexOrder: 3,
            alignSelf: "flex-end",
            background: '#fff url("data:image/png',
            backgroundSize: "18px auto",
            borderLeft: "1px solid #edf0f2",
            cursor: "pointer",
            display: "block",
            height: "60px",
            marginLeft: "auto",
            order: 3,
            position: "absolute",
            right: "120px",
            top: 0,
            transition: "all 0.2s",
            width: "60px"
          }}
          height={60}
          width={60}
        >
          <form
            role="search"
            method="get"
            className="search-form"
            action="https://www.sc.com/en/"
            style={{
              display: "none",
              position: "relative"
            }}
          >
            <label>
              <span
                className="screen-reader-text"
                style={{
                  clip: "rect(1px, 1px, 1px, 1px)",
                  height: "1px",
                  overflow: "hidden",
                  width: "1px",
                  WebkitClipPath: "inset(50%)",
                  border: 0,
                  clipPath: "inset(50%)",
                  margin: "-1px",
                  padding: 0,
                  position: "absolute",
                  wordWrap: "normal"
                }}
                height={1}
                width={1}
              >
                Search for:{" "}
              </span>
              <input
                type="search"
                className="search-field"
                placeholder="Type and press enter to search"
                defaultValue
                name="s"
                title="Search for:"
                style={{
                  color: "#364655",
                  font: "inherit",
                  margin: 0,
                  lineHeight: "60px",
                  fontFamily:
                    "SC Sans, Helvetica, Arial, Lucida Grande, sans-serif",
                  fontSize: "1.5rem",
                  border: "none",
                  borderRadius: "3px",
                  padding: "0 0 0 10px",
                  height: "60px",
                  left: 0,
                  outline: "none",
                  position: "absolute",
                  top: 0,
                  width: "calc(100% - 60px)"
                }}
                height={60}
                width="calc(100% - 60px)"
              />
            </label>
            <button
              type="submit"
              className="search-submit"
              style={{
                color: "rgba(0, 0, 0, 0.8)",
                font: "inherit",
                margin: 0,
                overflow: "visible",
                textTransform: "none",
                WebkitAppearance: "button",
                cursor: "pointer",
                fontFamily:
                  "SC Sans, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: "0.75rem",
                lineHeight: 1,
                background: "#e6e6e6",
                border: "1px solid",
                borderColor: "#ccc #ccc #bbb",
                borderRadius: "3px",
                padding: 0,
                display: "none",
                height: "80px",
                opacity: 0,
                position: "absolute",
                right: 0,
                top: 0,
                width: "80px"
              }}
              height={80}
              width={80}
            >
              <span
                className="screen-reader-text"
                style={{
                  clip: "rect(1px, 1px, 1px, 1px)",
                  height: "1px",
                  overflow: "hidden",
                  width: "1px",
                  WebkitClipPath: "inset(50%)",
                  border: 0,
                  clipPath: "inset(50%)",
                  margin: "-1px",
                  padding: 0,
                  position: "absolute",
                  wordWrap: "normal"
                }}
                height={1}
                width={1}
              >
                Search
              </span>
            </button>
          </form>
        </div>
        {}
        <div
          className="select-country"
          style={{
            msFlexItemAlign: "end",
            msFlexOrder: 4,
            alignSelf: "flex-end",
            backgroundColor: "#008738",
            border: 0,
            borderRadius: 0,
            display: "none",
            fontSize: "0.875rem",
            height: "80px",
            order: 4,
            position: "absolute",
            right: 0,
            top: 0,
            transition: "background-color 0.6s ease",
            width: "60px"
          }}
          bgcolor="#008738"
          height={80}
          width={60}
        >
          <a
            href="https://www.sc.com/en/"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              textDecoration: "none",
              transition: "0.4s",
              backgroundImage: 'url("data:image/png',
              backgroundPosition: "right 20px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "21px",
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 300,
              letterSpacing: "1px",
              lineHeight: "80px",
              overflow: "hidden",
              paddingLeft: "22px",
              paddingRight: "32px",
              textAlign: "center",
              textIndent: "-999px",
              width: "60px"
            }}
            align="center"
            width={60}
          >
            Visit local site{" "}
          </a>
        </div>
        {}
        <div
          id="header-country-select"
          style={{
            backgroundColor: "#008738",
            bottom: 0,
            position: "absolute",
            right: 0,
            top: 0,
            transition: "width 0.2s",
            whiteSpace: "nowrap",
            width: 0,
            zIndex: 10
          }}
          bgcolor="#008738"
          width={0}
        >
          <form
            role="search"
            method="get"
            id="countryform"
            action="https://www.sc.com/en/"
            style={{
              float: "left",
              paddingLeft: "54px",
              width: "calc(100% - 202px)"
            }}
            width="calc(100% - 202px)"
          >
            <label
              htmlFor="s"
              style={{
                display: "none",
                fontSize: "0.75rem"
              }}
            >
              Search for your market...{" "}
            </label>
            <input
              type="text"
              className="find-country"
              defaultValue
              name="s"
              id="s"
              style={{
                color: "#fff",
                font: "inherit",
                margin: 0,
                lineHeight: "38px",
                fontFamily:
                  "SC Sans, Helvetica, Arial, Lucida Grande, sans-serif",
                fontSize: "2rem",
                border: "none",
                borderRadius: "3px",
                padding: "3px",
                opacity: 0,
                backgroundColor: "#008738",
                fontWeight: 300,
                height: "40px",
                marginTop: "20px",
                outline: 0,
                width: "100%"
              }}
              bgcolor="#008738"
              height={40}
              width="100%"
            />
          </form>
          <button
            className="toggle-close"
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              font: "inherit",
              margin: 0,
              overflow: "visible",
              textTransform: "none",
              WebkitAppearance: "button",
              cursor: "pointer",
              fontFamily:
                "SC Sans, Helvetica, Arial, Lucida Grande, sans-serif",
              fontSize: "0.75rem",
              lineHeight: 1,
              background: "#e6e6e6",
              border: 0,
              borderColor: "#ccc #ccc #bbb",
              borderRadius: 0,
              padding: "0.6em 1em 0.4em",
              backgroundImage: 'url("data:image/png',
              backgroundRepeat: "no-repeat",
              backgroundSize: "14px",
              height: "14px",
              marginRight: "24px",
              marginTop: "31px",
              transition: "0.3s ease",
              width: "14px",
              backgroundColor: "transparent",
              float: "right",
              opacity: 0,
              visibility: "hidden"
            }}
            height={14}
            width={14}
          >
            <span
              className="screen-reader-text"
              style={{
                clip: "rect(1px, 1px, 1px, 1px)",
                height: "1px",
                overflow: "hidden",
                width: "1px",
                WebkitClipPath: "inset(50%)",
                border: 0,
                clipPath: "inset(50%)",
                margin: "-1px",
                padding: 0,
                position: "absolute",
                wordWrap: "normal"
              }}
              height={1}
              width={1}
            >
              Open toggle{" "}
            </span>
          </button>
          <div
            className="toggle-btn"
            style={{
              backgroundColor: "transparent",
              border: 0,
              borderRadius: 0,
              float: "right",
              opacity: 0,
              visibility: "hidden",
              marginRight: 0,
              marginTop: 0,
              position: "absolute",
              right: "52px",
              top: "10px",
              width: "84px"
            }}
            width={84}
          >
            <a
              className="sc-btn btn-outline"
              href="https://www.sc.com/en/our-locations/#globalhq"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                textDecoration: "none",
                transition: "all 0.4s",
                fontSize: "0.75rem",
                display: "inline-block",
                fontWeight: 700,
                lineHeight: "40px",
                marginBottom: "10px",
                marginLeft: 0,
                maxWidth: "100%",
                minHeight: "40px",
                overflow: "hidden",
                padding: 0,
                position: "relative",
                textAlign: "center",
                textOverflow: "ellipsis",
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                width: "100%",
                border: "1px solid #fff"
              }}
              align="center"
              valign="middle"
              width="100%"
            >
              View all{" "}
            </a>
          </div>
          <div
            className="sc-detection"
            style={{
              backgroundColor: "#364655",
              bottom: "-50px",
              display: "none",
              height: "50px",
              left: 0,
              position: "absolute",
              width: "100%"
            }}
            bgcolor="#364655"
            height={50}
            width="100%"
          ></div>
        </div>
      </header>
    );
  }
}

export default Header;

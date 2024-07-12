/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const paddingX = "px-lg-20 px-15";

export const Section = ({ className, children, ...props }) => {
  return (
    <>
      <section
        className={`container-fluid ${paddingX} d-flex justify-content-center align-items-center ${className}`}
        {...props}
      >
        {children}
      </section>
    </>
  );
};

export const LordIcon = ({ lordIconSrc, lordIconClrs, lordIconSize }) => {
  return (
    <>
      <lord-icon
        src={lordIconSrc}
        trigger="loop"
        colors={lordIconClrs}
        style={{ width: `${lordIconSize}rem`, height: `${lordIconSize}rem` }}
      ></lord-icon>
    </>
  );
};

export const SmDiv = ({ className, children }) => {
  return <div className={`fs-xl-base fs-md-sm fs-xs ${className}`}>{children}</div>;
};

export const LgDiv = ({ className, children }) => {
  return <div className={`ff-bubblegum fs-xxl-3xl fs-lg-2xl fs-sm-xl fs-lg ${className}`}>{children}</div>;
};

export const TitleDiv = ({ className, children }) => {
  return <div className={`ff-bubblegum fs-xxl-5xl fs-lg-4xl fs-sm-2xl fs-xl ${className}`}>{children}</div>;
};

export const SubTitleDiv = ({ className, children }) => {
  return <div className={`fs-xxl-2xl fs-lg-xl fs-sm-lg fs-base ${className}`}>{children}</div>;
};

export const LinkDiv = ({ className, link, children }) => {
  return (
    <Link to={link} className={`text-decoration-none fs-xl-base fs-md-sm fs-xs ${className}`}>
      {children}
    </Link>
  );
};

export const ButtonDiv = ({ className, onClick, children }) => {
  return (
    <button
      type="button"
      className={`btn ${className} fs-xl-base fs-md-sm fs-xs`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonLinkDiv = ({ className, to, onClick, children }) => {
  return (
    <Link
      type="button"
      className={`btn text-decoration-none text-center fs-xl-base fs-md-sm fs-xs ${className}`}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const CardIconLink = ({
  className,
  lordIconSrc,
  lordIconClrs,
  lordIconSize,
  cardTitle,
  cardText,
  cardLink,
  cardLinkText,
}) => {
  return (
    <>
      <div className={`card ${className}`}>
        <div className="card-body p-0 d-flex flex-column justify-content-center align-items-start">
          <LordIcon
            lordIconSrc={lordIconSrc}
            lordIconClrs={lordIconClrs}
            lordIconSize={lordIconSize}
          />
          <LgDiv className="card-title ff-bubblegum">{cardTitle}</LgDiv>
          <SmDiv className="card-text mb-2">{cardText}</SmDiv>
          <LinkDiv className="card-link text-primary" link={cardLink}>
            {cardLinkText}
          </LinkDiv>
        </div>
      </div>
    </>
  );
};

export const CardImgOverlay = ({
  className,
  cardLink,
  imgSrc,
  cardTitle,
  cardText,
}) => {
  return (
    <>
      <Link className={`card ${className}`} to={cardLink}>
        <img src={imgSrc} className="card-img" alt={imgSrc} />
        <div className="card-img-overlay">
          <LgDiv className="card-title text-center">{cardTitle}</LgDiv>
          <SmDiv className="card-text">{cardText}</SmDiv>
        </div>
      </Link>
    </>
  );
};

export const CardIcon = ({
  className,
  lordIconSrc,
  lordIconClrs,
  lordIconSize,
  cardTitle,
  cardText,
}) => {
  return (
    <>
      <div className={`card ${className}`}>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <LordIcon
            lordIconSrc={lordIconSrc}
            lordIconClrs={lordIconClrs}
            lordIconSize={lordIconSize}
          />
        </div>
        <div className="col-1"></div>
        <div className="card-body col-10 mt-lg-4 mt-0 p-0">
          <LgDiv className="m-0 card-title">{cardTitle}</LgDiv>
          <SmDiv className="card-text">{cardText}</SmDiv>
        </div>
      </div>
    </>
  );
};

export const CardImgButton = ({
  className,
  imgSrc,
  cardTitle,
  cardText,
  cardLink,
  cardLinkText,
}) => {
  return (
    <>
      <div className={`card ${className}`}>
        <img src={imgSrc} className="card-img-top" alt={imgSrc} />
        <div className="card-body">
          <LgDiv className="card-title">{cardTitle}</LgDiv>
          <SmDiv className="card-text mb-5">{cardText}</SmDiv>
          <LinkDiv className="btn btn-primary" link={cardLink}>
            <SmDiv>{cardLinkText}</SmDiv>
          </LinkDiv>
        </div>
      </div>
    </>
  );
};

export const CardImgLeftHorizontal = ({
  className,
  imgSrc,
  lordIconSrc,
  lordIconClrs,
  lordIconSize,
  cardTitle,
  cardText,
  cardLink,
  cardLinkText,
}) => {
  return (
    <>
      <div className={`card ${className}`}>
        <div className="row g-0 d-flex flex-lg-row flex-column justify-content-center align-items-center">
          <div className="col-lg-6 col-12">
            <img
              src={imgSrc}
              alt={imgSrc}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-lg-6 col-12">
            <div className="card-body">
              <SubTitleDiv className="card-title ff-bubblegum">{cardTitle}</SubTitleDiv>
              <SmDiv className="card-text mb-2">{cardText}</SmDiv>
              <LordIcon
                lordIconSrc={lordIconSrc}
                lordIconClrs={lordIconClrs}
                lordIconSize={lordIconSize}
              />
              <ButtonLinkDiv className="card-link btn-dark" to={cardLink}>
                {cardLinkText}
              </ButtonLinkDiv>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CardImgRightHorizontal = ({
  className,
  imgSrc,
  lordIconSrc,
  lordIconClrs,
  lordIconSize,
  cardTitle,
  cardText,
  cardLink,
  cardLinkText,
}) => {
  return (
    <>
      <div className={`card ${className}`}>
      <div className="row g-0 d-flex flex-lg-row flex-column justify-content-center align-items-center">
          <div className="col-lg-6 col-12">
            <div className="card-body">
              <LordIcon
                lordIconSrc={lordIconSrc}
                lordIconClrs={lordIconClrs}
                lordIconSize={lordIconSize}
              />
              <LgDiv className="card-title">{cardTitle}</LgDiv>
              <SmDiv className="card-text">{cardText}</SmDiv>
              <ButtonLinkDiv className="mt-6 card-link btn-dark" to={cardLink}>
                {cardLinkText}
              </ButtonLinkDiv>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src={imgSrc}
              alt={imgSrc}
              className="img-fluid rounded-start"
            />
          </div>
        </div>
      </div>
    </>
  );
};



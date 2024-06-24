/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const paddingX = "px-20";

export const Section = ({ className, children, ...props }) => {
  return (
    <>
      <section
        className={`position-relative container-fluid ${paddingX} d-flex justify-content-center align-items-center ${className}`}
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
  return <div className={`fs-xl ${className}`}>{children}</div>;
};

export const LgDiv = ({ className, children }) => {
  return <div className={`fs-4xl ${className}`}>{children}</div>;
};

export const TitleDiv = ({ className, children }) => {
  return <div className={`fs-6xl ${className}`}>{children}</div>;
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
        <div className="card-body d-flex flex-column justify-content-center align-items-start">
          <LordIcon
            lordIconSrc={lordIconSrc}
            lordIconClrs={lordIconClrs}
            lordIconSize={lordIconSize}
          />
          <LgDiv className="card-title ff-bubblegum">{cardTitle}</LgDiv>
          <SmDiv className="card-text">{cardText}</SmDiv>
          <Link to={cardLink} className="card-link fs-xl">
            {cardLinkText}
          </Link>
        </div>
      </div>
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
        <div className="col-2">
          <LordIcon
            lordIconSrc={lordIconSrc}
            lordIconClrs={lordIconClrs}
            lordIconSize={lordIconSize}
          />
        </div>
        <div className="card-body col-10">
          <LgDiv className="card-title ff-bubblegum">{cardTitle}</LgDiv>
          <SmDiv className="card-text">{cardText}</SmDiv>
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

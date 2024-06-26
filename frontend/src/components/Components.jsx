/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const paddingX = "px-lg-20 px-15";

export function LoginCustomer(){
  localStorage.setItem("customer acc", "true");
}

export function LoginAdmin(){
  localStorage.setItem("admin acc", "true");
}

export function LogoutCustomer(){
  localStorage.setItem("customer acc", "false");
}

export function LogoutAdmin(){
  localStorage.setItem("admin acc", "false");
}

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
  return <div className={`fs-base ${className}`}>{children}</div>;
};

export const LgDiv = ({ className, children }) => {
  return <div className={`ff-bubblegum fs-3xl ${className}`}>{children}</div>;
};

export const TitleDiv = ({ className, children }) => {
  return <div className={`ff-bubblegum fs-5xl ${className}`}>{children}</div>;
};

export const SubTitleDiv = ({ className, children }) => {
  return <div className={`fs-2xl ${className}`}>{children}</div>;
};

export const LinkDiv = ({ className, link, children }) => {
  return (
    <Link to={link} className={`fs-base ${className}`}>
      {children}
    </Link>
  );
};

export const ButtonDiv = ({ className, onClick, children }) => {
  return (
    <button
      type="button"
      className={`btn p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
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
          <SmDiv className="card-text mb-3">{cardText}</SmDiv>
          <LinkDiv className="card-link text-primary" link={cardLink}>
            {cardLinkText}
          </LinkDiv>
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
        <div className="col-1"></div>
        <div className="card-body col-10">
          <LgDiv className="card-title">{cardTitle}</LgDiv>
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
        <div className="row g-0">
          <div className="col-6">
            <img
              src={imgSrc}
              alt={imgSrc}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-6">
            <div className="card-body">
              <LgDiv className="card-title">{cardTitle}</LgDiv>
              <SmDiv className="card-text mb-2">{cardText}</SmDiv>
              <LordIcon
                lordIconSrc={lordIconSrc}
                lordIconClrs={lordIconClrs}
                lordIconSize={lordIconSize}
              />
              <LinkDiv className="card-link" link={cardLink}>
                {cardLinkText}
              </LinkDiv>
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
        <div className="row g-0">
          <div className="col-6">
            <div className="card-body">
              <LordIcon
                lordIconSrc={lordIconSrc}
                lordIconClrs={lordIconClrs}
                lordIconSize={lordIconSize}
              />
              <LgDiv className="card-title">{cardTitle}</LgDiv>
              <SmDiv className="card-text">{cardText}</SmDiv>
              <LinkDiv className="card-link" link={cardLink}>
                {cardLinkText}
              </LinkDiv>
            </div>
          </div>
          <div className="col-6">
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

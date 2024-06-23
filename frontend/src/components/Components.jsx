/* eslint-disable react/prop-types */
export const CardIcon = ({
  lordIconSrc,
  cardTitle,
  cardText,
  cardLink,
  cardLinkText,
}) => {
  return (
    <>
      <div className="card col-4 border-0">
        <div className="card-body d-flex flex-column align-items-start">
          <lord-icon
            src={lordIconSrc}
            trigger="loop"
            colors="primary:#000000,secondary:#35aa90"
            style={{ width: "4rem", height: "4rem" }}
          ></lord-icon>
          <div className="card-title ff-bubblegum fs-3xl">{cardTitle}</div>
          <div className="card-text fs-base">{cardText}</div>
          <a href={cardLink} className="card-link">
            {cardLinkText}
          </a>
        </div>
      </div>
    </>
  );
};

export const CardImgOverlay = ({ imgSrc, cardTitle, cardText }) => {
  return (
    <>
      <div className="card text-bg-dark col-4">
        <img src={imgSrc} className="card-img" alt={imgSrc} />
        <div className="card-img-overlay">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </>
  );
};

export const Section = ({ className, children, ...props }) => {
  return (
    <>
      <section className={`container-fluid px-20 ${className}`} {...props}>
        {children}
      </section>
    </>
  );
};

export const Footer = () => {
    return (
      <>
        <footer className="container-fluid px-20 py-5 bg-secondary">
          <div className="text-center text-dark fs-base">Copyright © Jourdan`s Snack Corner 2024</div>
        </footer>
      </>
    );
  };
  
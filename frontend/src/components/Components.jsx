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

export const Section = ({className, children, ...props}) => {
    return(
        <>
        <section className={`container-fluid px-15 ${className}`} {...props}>
            {children}
        </section>
        </>
    )
}

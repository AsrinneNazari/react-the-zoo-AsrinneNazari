import "./../styles/NotFound.scss";
export const NotFound = () => {
  const errorImg = "/public/img/error-icon.png";
  return (
    <h3 className="notFound">
      Oj något blev fel! <img src={errorImg} alt="error icon" />
    </h3>
  );
};

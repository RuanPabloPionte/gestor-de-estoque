// eslint-disable-next-line react/prop-types
export default function Alert({ text, onClick }) {
  return (
    <div
      className="alert alert-success d-flex justify-content-between bg-primary text-light"
      role="alert"
    >
      {/* <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> */}
      <div>{text}</div>
      <button className="btn-close" onClick={onClick}></button>
    </div>
  );
}

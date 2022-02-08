export default function Error({ message, setErrorMessage }) {
  return (
    <div className="error">
      <div>
        {message}{" "}
        <div>
          <button onClick={() => setErrorMessage("")}>확인</button>
        </div>
      </div>
    </div>
  );
}

export default function Footer({ setPage }) {
  function ClickSearch() {
    setPage("searchpages");
  }
  function ClickBaemin() {
    setPage("baemin");
  }
  function ClickAddStore() {
    setPage("addstore");
  }
  function ClickDeleteStore() {
    setPage("deletestore");
  }
  function ClickSignUp() {
    setPage("signup");
  }
  function ClickLogIn() {
    setPage("login");
  }
  function ClickChangeStore() {
    setPage("changestore");
  }

  return (
    <div className="footer">
      <div onClick={ClickSearch}>검색</div>
      <div onClick={ClickBaemin}>배민</div>
      <div onClick={ClickAddStore}>가게추가</div>
      <div onClick={ClickChangeStore}>가게수정</div>
      <div onClick={ClickDeleteStore}>가게삭제</div>
      <div>my배민</div>
      <div onClick={ClickSignUp}>회원가입</div>
      <div onClick={ClickLogIn}>로그인</div>
    </div>
  );
}

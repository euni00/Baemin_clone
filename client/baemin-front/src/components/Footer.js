export default function Footer({setPage}) {
  function ClickSearch() {
    setPage('searchpages');
  }
  function ClickBaemin() {
    setPage('baemin');
  }
    return (
        <div className="footer">
        <div onClick={ClickSearch}>검색</div>
        <div>찜</div>
        <div onClick={ClickBaemin}>배민</div>
        <div>주문내역</div>
        <div>my배민</div>
      </div>
    )
}
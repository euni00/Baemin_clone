import LeftArrow from '../images/leftarrow.svg'
export default function Header() {
    return (
        <div>
            <div><img src={LeftArrow} /></div>
            <div className="menulist">
            <div className="active">배달</div>
                <div>배민1</div>
                <div>포장</div>
                <div>쇼핑라이브</div>
                <div>선물하기</div>
            </div>
        </div>
    )
}
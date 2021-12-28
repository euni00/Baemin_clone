import ads from '../images/ads.png'
export default function Ads() {
    return (
        <div className="ads">
            <img className="adsimages" src={ads} />
            <div className="adstext">5/17 모두보기</div>
        </div>
    )
}
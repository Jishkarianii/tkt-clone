import "./style.scss"
import top_ge from '../../assets/icons/top-ge.png'

function Footer() {
  return (
    <footer>
        <div className="inner-cont container">
            <ul>
                <li>ორგანიზატორებისთვის</li>
                <li>ჩატარებული ღონისძიებები</li>
            </ul>
            <ul>
                <li>TKT Club-ის შესახებ</li>
                <li>ხშირად დასმული კითხვები</li>
            </ul>
            <ul>
                <li>წესები და პირობები</li>
                <li>კონფიდენციალობის პოლიტიკა</li>
            </ul>
            <ul>
                <li><i className="icon-messenger"></i> ონლაინ დახმარება</li>
                <li><i className="icon-call"></i> +995 32 2195577</li>
            </ul>
            <ul>
                <li><i className="icon-mail" style={{ fontSize: "14px" }}></i> Support@Tkt.Ge</li>
            </ul>
            <ul>
                <li><img src={top_ge} alt="top.ge" /></li>
                <li>Copyright © 2015-2023 Online Tickets LLC. ყველა უფლება დაცულია.</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
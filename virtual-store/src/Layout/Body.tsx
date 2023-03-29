import styles from './Body.module.css'

import { TbTruckDelivery} from 'react-icons/tb/'
import { MdPayment } from 'react-icons/md/'
import { FaWhatsapp } from 'react-icons/fa/'
import { RiShieldCheckLine } from 'react-icons/ri/'


function Body() {
    return (
        <div className={styles.body}>
            <ul className={styles.list}>
                <li className={styles.item}>
                     <TbTruckDelivery className={styles.icon}/> FRETE GRÁTIS
                </li>
                <li className={styles.item}>
                    <MdPayment className={styles.icon}/> PARCELAMENTO EM ATÉ 6X SEM JUROS
                </li>
                <li className={styles.item}>
                    <FaWhatsapp className={styles.icon}/> NOSSO WHATSAPP (55)55555-5555
                </li>
                <li className={styles.item}>
                    <RiShieldCheckLine className={styles.icon}/> SITE SEGURO
                </li>
            </ul>
        </div>
    )
}

export default Body
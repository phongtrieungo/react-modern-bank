import styles from '../style';
import { clients } from '../constants';

export const Client = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <section className={`${styles.flexCenter} w-full flex-wrap`}>
            { clients.map(client => (
                <span key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                    <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
                </span>
            ))}
        </section>
    </section>
)
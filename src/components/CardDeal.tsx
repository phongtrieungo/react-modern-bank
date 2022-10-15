import styles, { layout } from '../style';
import { card} from '../assets';
import { Button } from './Button';

export const CardDeal = () => (
    <section id="card-deal" className={`${layout.section}`}>
        <section className='flex-1'>
            <h2 className={`${styles.heading2}`}>Find a better card deal in few easy steps.</h2>
            <p className={`${styles.paragraph}`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button text='Get started' styles='mt-10' />
        </section>

        <section className={`${layout.sectionImg}`}>
            <img src={card} alt="card" className='w-[100%] h-[100%]' />
        </section>
    </section>
)
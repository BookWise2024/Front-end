import libimg from '../../../../assets/img/notFound/NotFound.svg';
import style from './Photo.module.css';

export default function Photo() {

    return (
        <div className={ style.base }>
            <img className={ style.img } src={ libimg }/>
        </div>
    );
}
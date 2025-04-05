import { MdPhoneInTalk } from 'react-icons/md';
import s from './Contact.module.css';
import { FaRegUser } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item}>
      <p>
        <FaRegUser />
        {name}
      </p>
      <p>
        <MdPhoneInTalk />
        {number}
      </p>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

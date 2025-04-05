import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contact, onDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {contact.map(item => (
          <Contact key={item.id} {...item} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

import { useSelector , useDispatch} from "react-redux";
import { addNewContact, deleteContact } from "../redux/store"

export const App = () => {
  const value = useSelector(state => state.myValue)
  const dispatch = useDispatch()
  console.log(value);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {value}
    <button onClick={dispatch(addNewContact(100))}>Add new contact</button>
    <button onClick={dispatch(deleteContact(100))}>Delete contact</button>
    </div>
  );
};

import React , {useEffect} from 'react'
import { getLocalStorage } from '../utils/localStorage';

const AuthContext = ({children}) => {

  // useEffect(() => {
  //   //setLocalStorage();
  //   getLocalStorage()
  // }, []);

  return (
    <div>{children}</div>
  )
}

export default AuthContext
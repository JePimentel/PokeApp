import { useDispatch } from "react-redux"
import { changeName } from "../redux/slices/userSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dispatchUserName = () => {
    dispatch(changeName(userName))
    navigate('/pokedex')
  }
  return (
    <div className="login">
      login
      <input 
        type="text" 
        placeholder="user name" 
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <button
        onClick={dispatchUserName}
      >
        send
      </button>
    </div>
  )
}

export { Login }
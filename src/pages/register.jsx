import { useState } from 'react'
import { supabase } from '../services/supabase'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Registro exitoso, revisa tu correo')
    }
  }

  return (
    <div>
      <h2>Registro</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Registrarse
      </button>
    </div>
  )
}

export default Register

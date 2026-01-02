import { useEffect, useState } from 'react'
import { supabase } from './services/supabase'
import Login from './pages/login'
import Register from './pages/register'
import Products from './components/products'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => listener.subscription.unsubscribe()
  }, [])

  // 🔒 USUARIO NO LOGUEADO
  if (!session) {
    return (
      <div>
        <h1>SmartShop</h1>
        <Login />
        <Register />
      </div>
    )
  }

  // ✅ USUARIO LOGUEADO (DASHBOARD)
  return (
    <div>
      <h1>Dashboard SmartShop</h1>

      <p>
        Usuario autenticado: <strong>{session.user.email}</strong>
      </p>

      <button onClick={() => supabase.auth.signOut()}>
        Cerrar sesión
      </button>

      <hr />

      <h2>Productos</h2>
      <Products />
    </div>
  )
}

export default App

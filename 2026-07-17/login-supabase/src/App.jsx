import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Login from './Login'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  if (!session) {
    return <Login onLogin={setSession} />
  }

  return (
    <div style={{ maxWidth: 420, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
      <h2>Bienvenido, {session.user.email}</h2>
      <p>Tu sesión está activa en Supabase.</p>
      <button onClick={handleLogout} style={{ marginTop: 16, padding: '10px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', background: '#dc2626', color: 'white' }}>
        Cerrar sesión
      </button>
    </div>
  )
}

export default App

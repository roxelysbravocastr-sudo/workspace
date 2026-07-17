import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    const { data, error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })

    setLoading(false)

    if (error) {
      const message = error.message?.toLowerCase() || ''

      if (message.includes('invalid login credentials')) {
        setErrorMsg('No existe una cuenta con ese correo o la contraseña es incorrecta. Si eres nuevo, usa Registrarme primero.')
      } else if (message.includes('email not confirmed')) {
        setErrorMsg('Tu correo aún no ha sido confirmado. Revisa tu bandeja de entrada o desactiva la confirmación de email en Supabase para probar más rápido.')
      } else {
        setErrorMsg(error.message)
      }
      return
    }

    if (data.session) {
      onLogin(data.session)
    } else if (isSignUp) {
      setErrorMsg('Revisa tu correo para confirmar la cuenta.')
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
      <h2>{isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ display: 'grid', gap: 6 }}>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{ padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
          />
        </div>
        {errorMsg && <p style={{ color: 'red', margin: 0 }}>{errorMsg}</p>}
        <button type="submit" disabled={loading} style={{ padding: '10px 14px', borderRadius: 8, border: 'none', cursor: 'pointer', background: '#2563eb', color: 'white' }}>
          {loading ? 'Cargando...' : isSignUp ? 'Registrarme' : 'Entrar'}
        </button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)} style={{ marginTop: 12, background: 'transparent', border: 'none', color: '#2563eb', cursor: 'pointer' }}>
        {isSignUp ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
      </button>
    </div>
  )
}

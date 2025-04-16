'use client'

import styles from '@/styles/login.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.container}>
    <Image
        src="https://app.fiancarapida.com/logo.svg"
        alt="Logo"
        width={200}
        height={60}
        unoptimized
    />
      <h2 className={styles.title}>Fazer login na conta</h2>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail*</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha*</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Digite sua senha"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        <div className={styles.links}>
          <a href="#">Esqueceu sua senha?</a>
          <a href="#" className={styles.createAccount}>Criar conta</a>
        </div>

        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </div>
  )
}
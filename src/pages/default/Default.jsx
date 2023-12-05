import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import css from './Default.module.css'

export default function Default() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className={css.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={`${css.logo} ${css.react}`} alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className={css.readTheDocs}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

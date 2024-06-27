import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="min-w-screen min-h-screen flex items-start justify-center bg-light dark:bg-darkest">
      <div className="w-[95vw] md:w-[70vw] lg:w-[60vw] py-2 md:py-4 lg:py-8">
        <Header/>
        <App />
      </div>
  </div>
)

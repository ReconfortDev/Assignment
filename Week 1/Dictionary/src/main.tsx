import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="min-w-screen min-h-screen flex items-start justify-center bg-light dark:bg-darkest">
      <div className="w-[93vw] md:w-[80vw] lg:w-[70vw] xl:w-[45vw] py-4 md:py-6 lg:py-12 flex flex-col gap-8">
        <Header/>
        <App />
      </div>
  </div>
)

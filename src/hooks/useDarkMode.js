import { useEffect } from 'react' // Import and set up your effect hook.
import useLocalStorage from './useLocalStorage'

// This effect hook inside the function is going to be the button on the page that turns dark mode on and off.
const useDarkMode = () => {
    //  `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
    const [darkMode, setDarkMode] = useLocalStorage('key1')

    useEffect(() => {
        return darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode]); // <--- We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.

    return [darkMode, setDarkMode] // <-- Return those two values in an array as well.
}

export default useDarkMode
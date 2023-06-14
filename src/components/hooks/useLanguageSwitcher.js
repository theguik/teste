import React, { useEffect, useState } from 'react'

const useLanguageSwitcher = () => {

    const preferEnglish = "(prefer-language: english)";
    const [mode, setMode] = useState("");

    useEffect(()=>{

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("language");

        const handleChange = () => {

            if(userPref){
                let check = userPref === "english" ? "english" : "portuguese";
                setMode(check);
                if(check==="english"){

                    document.documentElement.classList.add("english")
                }else{
                    document.documentElement.classList.remove("english")
                }
                

            }else{
                let check = mediaQuery.matches ? "english":"portuguese";
                setMode(check);
                
                if(check==="english"){

                    document.documentElement.classList.add("english")
                }else{
                    document.documentElement.classList.remove("english")
                }
                }
            }

            handleChange();
            
        mediaQuery.addEventListener("change", handleChange)

        return() =>  mediaQuery.removeEventListener("change", handleChange)
    
    }, [])

    useEffect(()=> {
            if(mode === "english"){
                window.localStorage.setItem("language", "english");
                document.documentElement.classList.add("english")

            }
            
            if(mode === "portuguese"){
                window.localStorage.setItem("language", "portuguese");
                document.documentElement.classList.remove("portuguese")
            }


    }, [mode]
    
    )
    

  return [mode, setMode]
}

export default useLanguageSwitcher
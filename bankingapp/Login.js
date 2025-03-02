import Header from "./src/components/header";

const login = () => { 

    fetch('/api/user/profile')
    .then(response => response.json()) 
    .then(data => {
        setUser(data)
        setLoading(false)
    })
    const connection = document.querySelector('signInDiv');
    
    if 
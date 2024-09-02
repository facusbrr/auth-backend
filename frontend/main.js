(async () => {
    const response = await fetch('http://localhost:4000/session', {
        method: 'GET',
        credentials: 'include' // Importante para enviar las cookies de sesión
    })

    console.log({ response })


    if (response.ok) {
        const data = await response.json();
        document.getElementById('user-name').innerText = data.user.username;
    } else {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
    }
})();


// Manejar el cierre de sesión
document.getElementById('logout').addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/logout', {
        method: 'POST',
        credentials: 'include'
    })
    
    if (!response.ok) {
        throw new Error('Error al cerrar sesión');
    } else {
        window.location.href = 'index.html';
    }
});
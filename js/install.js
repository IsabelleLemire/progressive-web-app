let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the default browser install prompt
    e.preventDefault();
    // Store the event for later use
    deferredPrompt = e;
    // Show your custom install button
    const installButton = document.getElementById('butInstall');
    installButton.removeAttribute('hidden');
});

const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', () => {
    if (deferredPrompt) {
        // Show the browser install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            // Reset the deferred prompt variable
            deferredPrompt = null;
        });
    }
});

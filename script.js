function showMessage() {
    const messageElement = document.getElementById("message");
    
    // Mostrar el mensaje
    messageElement.classList.remove("hidden");
  
    // Después de 3 segundos, ocultar el mensaje
    setTimeout(() => {
      messageElement.classList.add("hidden");
    }, 3000); // El mensaje desaparece después de 3 segundos
}

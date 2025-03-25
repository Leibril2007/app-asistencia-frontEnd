async function camposGrados() {
    try {
      const response = await fetch('http://localhost:3000/grados');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
}


export { camposGrados };
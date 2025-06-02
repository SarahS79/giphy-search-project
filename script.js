const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');

form.addEventListener('submit', async(e) => {  
    e.preventDefault();  
    const query = input.value.trim();  
    gifContainer.innerHTML = '';

      
    const apiKey = 'AnGqEKLcldeiKMgCafdPNkDoeESwlcpZ';  
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=12`;

      
    try {    
        const response = await fetch(url);    
        const data = await response.json();    
        data.data.forEach(gif => {      
            const img = document.createElement('img');      
            img.src = gif.images.fixed_height.url;      
            gifContainer.appendChild(img);    
        });  
    } catch (error) {    
        gifContainer.innerHTML = '<p>Something went wrong. Please try again.</p>';    
        console.error(error);  
    }
});
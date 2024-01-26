document.querySelector('.tab_1').addEventListener('click', function(){
    document.querySelector('.content_box').innerHTML = `
    <div class="content">
                <div>
                    <img src="/images/illustration-features-tab-1.svg" alt="illustration-features-tab-1">
                </div>

                <div>
                    <h2>
                        Bookmark in one click
                    </h2>
    
                    <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.
                    </p>
    
                    <button>More Info</button>
                </div>
               
            </div>`
})

document.querySelector('.tab_2').addEventListener('click', function(){
    document.querySelector('.content_box').innerHTML = `
    <div class="content">
               <div>
                    <img src="/images/illustration-features-tab-2.svg" alt="illustration-features-tab-2">
                </div>
                
                <div>
                    <h2>
                        Intelligent search
                    </h2>
                    
                    <p>
                        Our powerful search feature will help you find saved sites in no time at all. 
                        No need to trawl through all of your bookmarks.
                    </p>
                    
                    <button>More Info</button>
                </div>
            </div>`
})

document.querySelector('.tab_3').addEventListener('click', function(){
    document.querySelector('.content_box').innerHTML = `
    <div class="content">
                 <div>
                    <img src="/images/illustration-features-tab-3.svg" alt="illustration-features-tab-3">
                </div>
                
                <div>
                    <h2>
                        Share your bookmarks
                    </h2>
                    
                    <p>
                        Easily share your bookmarks and collections with others. Create a shareable 
                        link that you can send at the click of a button.
                    </p>
                    
                    <button>More Info</button>
                </div>
            </div>`
})


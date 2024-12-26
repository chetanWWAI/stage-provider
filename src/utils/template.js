(function() {  
      const iframeId = 'chatbot-iframe';
      const buttonId = 'chatbot-toggle-button';
  
      const buttonBottomVar = 20; 
    
      // Create the iframe
      const iframe = document.createElement('iframe');
      iframe.src = 'https://bot-provider.wordworksai.me';
      iframe.id = iframeId;
      iframe.className = "fade-in-element";
      iframe.style.position = 'fixed';
      iframe.style.border = 'none';
      iframe.style.backgroundColor = 'white';
      // iframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      // iframe.style.boxShadow = 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset';
      iframe.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
      iframe.style.display = 'none';  // Initially hidden  #fa0494
  
      const newDiv = document.createElement('div');
      newDiv.classList.add("toggle-btn-for-iframe-sn76sdtfysdf-inside");
      newDiv.style.display = 'none';  // Initially hidden
      newDiv.innerHTML = `<svg width="42px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#1C354B"></path> </g></svg>`;
  
      const loaderDiv = document.createElement('div');
      loaderDiv.classList.add("loader-our-iframe-is-loaded-jbsd54");
      loaderDiv.style.position = 'fixed';
      loaderDiv.style.top = '40vh';
      loaderDiv.style.right = '220px';
      loaderDiv.style.zIndex = '1030';
      loaderDiv.style.display = 'none';
  
      iframe.onload = () => {
        console.log("load done");
        loaderDiv.remove();
      }
  
      function adjustDivSize() {
        const windowWidth = window.innerWidth;
  
        if (windowWidth < 480) {
          iframe.style.width = `100%`;
          iframe.style.right = '0';
          iframe.style.bottom = '0';
          iframe.style.height = '100%';
          iframe.style.zIndex = '1002';
          iframe.style.borderRadius = "0";
          newDiv.style.top = "0px";
          newDiv.style.right = '0px';
          newDiv.style.bottom = "";
          if(loaderDiv) {
            loaderDiv.style.right = '40%';
          }
        } else {
          iframe.style.width = '450px';
          iframe.style.right = '20px';
          iframe.style.bottom = `${buttonBottomVar + 80}px`;
          iframe.style.height = '60vh';
          iframe.style.zIndex = '1000';
          iframe.style.borderRadius = "10px";
          newDiv.style.right = '20px';
          newDiv.style.top = "";
          newDiv.style.bottom = 'calc(60vh + 51px)';
          if(loaderDiv) {
            loaderDiv.style.right = '220px';
          }
        }
      }
  
      adjustDivSize();
  
      // Adjust on window resize
      window.addEventListener('resize', adjustDivSize);
    
      // Create the toggle button
      const button = document.createElement('button');
      button.id = buttonId;
      // button.innerText = 'Chat with Us';
      button.innerHTML = `<svg width="44px" height="44px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4643d0" stroke="#4643d0" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M885.8 383.8h-90.4c12.3 15.8 19.7 35.6 19.7 57.1v194c0 51.3-42 93.2-93.2 93.2H494.1c12.1 31 42.2 53.1 77.4 53.1h314.3c45.6 0 83-37.3 83-83V466.8c-0.1-45.7-37.4-83-83-83z" fill="#FFB89A"></path><path d="M780.7 582.4V286.3c0-74.2-60.7-134.9-134.9-134.9H198.2c-74.2 0-134.9 60.7-134.9 134.9v296.1c0 70.5 54.8 128.7 123.8 134.4 0 0-20 155.4 4.9 155.4s188.4-154.9 188.4-154.9h265.3c74.3 0 135-60.7 135-134.9z m-424.1 74.9l-17.4 16.4c-0.3 0.3-34.5 32.7-73.2 67.1-8.5 7.5-16.2 14.3-23.3 20.5 1.9-20.9 3.9-36.6 3.9-36.8l8-62.3L192 657c-38.5-3.2-68.7-36-68.7-74.6V286.3c0-19.9 7.8-38.6 22.1-52.8 14.2-14.2 33-22.1 52.8-22.1h447.6c19.9 0 38.6 7.8 52.8 22.1 14.2 14.2 22.1 33 22.1 52.8v296.1c0 19.9-7.8 38.6-22.1 52.8-14.2 14.2-33 22.1-52.8 22.1H356.6z" fill="#7876d5"></path><path d="M830.3 337.9c-16.2-3.3-32.1 7.1-35.4 23.3-3.3 16.2 7.1 32.1 23.3 35.4 39 8 67.3 42.7 67.3 82.5v177c0 41.6-31.1 77.5-72.3 83.4l-32.7 4.7 7.8 32.1c2 8.1 3.9 16.8 5.8 25.3-17.6-16.4-37.3-35.2-55.2-52.7l-8.7-8.6H562.5c-21.9 0-36.6-1.4-47.2-8.6-13.7-9.3-32.4-5.8-41.7 7.9-9.3 13.7-5.8 32.4 7.9 41.7 25.7 17.5 55.3 19 81 19h143.2c10 9.7 27.3 26.3 45 42.8 16.2 15.1 29.6 27.1 39.8 35.9 20 17 29.3 23.1 41.6 23.1 9.7 0 18.7-4.4 24.8-12.1 10.1-12.9 10.2-29.1 0.5-78.7-1.4-7.2-2.9-14.2-4.3-20.6 54.4-21.1 92.4-74.3 92.4-134.6v-177c0.1-68-48.4-127.4-115.2-141.2z" fill="#7876d5"></path><path d="M434.6 602.8c-35.9 0-71-17.1-98.8-48.1-24.6-27.5-39.3-61.6-39.3-91.4v-29.7l29.7-0.3c0.4 0 36.2-0.4 95.4-0.4 16.6 0 30 13.4 30 30s-13.4 30-30 30c-22.3 0-41.2 0.1-56.2 0.1 3.8 7.1 8.8 14.5 15.1 21.6 16 17.9 35.7 28.1 54.1 28.1s38.1-10.3 54.1-28.1c6.5-7.3 11.6-14.9 15.4-22.2-13.7-2.8-24.1-15-24-29.5 0.1-16.5 13.5-29.9 30-29.9h0.1c27.1 0.1 32.5 0.2 33.6 0.3l28.9 1.1v28.9c0 29.8-14.7 63.9-39.3 91.4-27.9 31-62.9 48.1-98.8 48.1z m107.1-109.5z" fill="#a086fd"></path></g></svg>`;
      button.style.position = 'fixed';
      button.style.bottom = `${buttonBottomVar}px`;
      button.style.right = '20px';
      button.style.zIndex = '1001';
      button.style.padding = '10px';
      button.style.border = 'none';
      button.style.backgroundColor = '#efefef';
      button.style.color = '#fff';
      button.style.borderRadius = '50%';
      button.style.cursor = 'pointer';
      button.style.width = '70px';
      button.style.height = '70px';
      button.style.border = '1px solid pink';
      button.style.display = 'flex';
      button.style.justifyContent = 'center';
      button.style.alignItems = 'center';
  
      function disableBodyScroll() {
        if (window.innerWidth < 480) {
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.width = '100%';
        }
      }
      
      function enableBodyScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
  
      function toggleBot() {
        if (iframe.style.display === 'none') {
          disableBodyScroll();
          iframe.style.display = 'block';
          newDiv.style.display = "flex";
          if(loaderDiv) {
            loaderDiv.style.display = 'block';
          }
          iframe.style.animation = 'myAnimFadeOut 2s ease 0s 1 normal forwards';
          button.innerHTML = `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#4643d0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>`;
        } else {
          enableBodyScroll();
          iframe.style.display = 'none';
          newDiv.style.display = 'none';
          if(loaderDiv) {
            loaderDiv.style.display = 'none';
          }
          iframe.style.animation = 'myAnimFadeIn 2s ease 0s 1 normal forwards';
          button.innerHTML = `<svg width="44px" height="44px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4643d0" stroke="#4643d0" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M885.8 383.8h-90.4c12.3 15.8 19.7 35.6 19.7 57.1v194c0 51.3-42 93.2-93.2 93.2H494.1c12.1 31 42.2 53.1 77.4 53.1h314.3c45.6 0 83-37.3 83-83V466.8c-0.1-45.7-37.4-83-83-83z" fill="#FFB89A"></path><path d="M780.7 582.4V286.3c0-74.2-60.7-134.9-134.9-134.9H198.2c-74.2 0-134.9 60.7-134.9 134.9v296.1c0 70.5 54.8 128.7 123.8 134.4 0 0-20 155.4 4.9 155.4s188.4-154.9 188.4-154.9h265.3c74.3 0 135-60.7 135-134.9z m-424.1 74.9l-17.4 16.4c-0.3 0.3-34.5 32.7-73.2 67.1-8.5 7.5-16.2 14.3-23.3 20.5 1.9-20.9 3.9-36.6 3.9-36.8l8-62.3L192 657c-38.5-3.2-68.7-36-68.7-74.6V286.3c0-19.9 7.8-38.6 22.1-52.8 14.2-14.2 33-22.1 52.8-22.1h447.6c19.9 0 38.6 7.8 52.8 22.1 14.2 14.2 22.1 33 22.1 52.8v296.1c0 19.9-7.8 38.6-22.1 52.8-14.2 14.2-33 22.1-52.8 22.1H356.6z" fill="#7876d5"></path><path d="M830.3 337.9c-16.2-3.3-32.1 7.1-35.4 23.3-3.3 16.2 7.1 32.1 23.3 35.4 39 8 67.3 42.7 67.3 82.5v177c0 41.6-31.1 77.5-72.3 83.4l-32.7 4.7 7.8 32.1c2 8.1 3.9 16.8 5.8 25.3-17.6-16.4-37.3-35.2-55.2-52.7l-8.7-8.6H562.5c-21.9 0-36.6-1.4-47.2-8.6-13.7-9.3-32.4-5.8-41.7 7.9-9.3 13.7-5.8 32.4 7.9 41.7 25.7 17.5 55.3 19 81 19h143.2c10 9.7 27.3 26.3 45 42.8 16.2 15.1 29.6 27.1 39.8 35.9 20 17 29.3 23.1 41.6 23.1 9.7 0 18.7-4.4 24.8-12.1 10.1-12.9 10.2-29.1 0.5-78.7-1.4-7.2-2.9-14.2-4.3-20.6 54.4-21.1 92.4-74.3 92.4-134.6v-177c0.1-68-48.4-127.4-115.2-141.2z" fill="#7876d5"></path><path d="M434.6 602.8c-35.9 0-71-17.1-98.8-48.1-24.6-27.5-39.3-61.6-39.3-91.4v-29.7l29.7-0.3c0.4 0 36.2-0.4 95.4-0.4 16.6 0 30 13.4 30 30s-13.4 30-30 30c-22.3 0-41.2 0.1-56.2 0.1 3.8 7.1 8.8 14.5 15.1 21.6 16 17.9 35.7 28.1 54.1 28.1s38.1-10.3 54.1-28.1c6.5-7.3 11.6-14.9 15.4-22.2-13.7-2.8-24.1-15-24-29.5 0.1-16.5 13.5-29.9 30-29.9h0.1c27.1 0.1 32.5 0.2 33.6 0.3l28.9 1.1v28.9c0 29.8-14.7 63.9-39.3 91.4-27.9 31-62.9 48.1-98.8 48.1z m107.1-109.5z" fill="#a086fd"></path></g></svg>`;
        }
      };
  
      button.onclick = toggleBot;
      newDiv.onclick = toggleBot;

      const wrapperDiv = document.createElement('div');
      wrapperDiv.id = "iframe-wrapper-div-fsfbhye";
    
      wrapperDiv.appendChild(iframe);
      wrapperDiv.appendChild(button);
      wrapperDiv.appendChild(newDiv);

      const checkPrevious = document.getElementById("iframe-wrapper-div-fsfbhye");
      if (checkPrevious) {
        checkPrevious.remove();
      }

      document.body.appendChild(wrapperDiv);
  
      const style = document.createElement('style');
  
      style.textContent = `
      .loader-our-iframe-is-loaded-jbsd54 {
        width: 50px;
        aspect-ratio: 1;
        --_c:no-repeat radial-gradient(farthest-side,#04ccfb 92%,#0000);
        background: 
          var(--_c) top,
          var(--_c) left,
          var(--_c) right,
          var(--_c) bottom;
        background-size: 12px 12px;
        animation: l7 1s infinite;
      }
      @keyframes l7 {to{transform: rotate(.5turn)}}
  
      .toggle-btn-for-iframe-sn76sdtfysdf-inside {
        position: fixed;
        width: 50px;
        height: 49px;
        z-index: 1030;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        cursor: pointer;
        padding-right: 5px;
      }
  
      .toggle-btn-for-iframe-sn76sdtfysdf-inside:hover {
        background-color: #edf3f8;
      }
  
      `;
  
      document.head.appendChild(style);
      document.body.appendChild(loaderDiv);
  
  })();
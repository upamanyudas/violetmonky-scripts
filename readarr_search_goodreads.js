// ==UserScript==
// @name         Readarr Search Goodreads
// @icon         data:image/png;base64,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
// @namespace    http://tampermonkey.net/
// @version      0.1
// @namespace    https://github.com/upamanyudas/violetmonky-scripts
// @description  Add a custom link to search your Readarr instance from Goodreads book pages
// @author       Upamanyu Das
// @match        https://www.goodreads.com/book/show/*
// @grant        none

// @homepage     https://github.com/upamanyudas/violetmonky-scripts
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        // Function to extract ISBN from the book page
        function getISBN() {
            const isbnDivs = document.querySelectorAll('.DescListItem');
            let isbn = null;
            isbnDivs.forEach(div => {
                const dt = div.querySelector('dt');
                if (dt && dt.textContent.includes('ISBN')) {
                    const dd = div.querySelector('.TruncatedContent__text');
                    if (dd) {
                        isbn = dd.textContent.split(' ')[0]; // Extracting the first part which is the ISBN13
                        console.log('ISBN found:', isbn); // Debug log
                    }
                }
            });
            if (!isbn) {
                console.error('ISBN not found');
            }
            return isbn;
        }

        // Create a custom search button with an image
        function createSearchButton(isbn) {
            const span = document.createElement('span');
            const button = document.createElement('a');
            button.href = `https://addarr.daserve.in/open.php?query=isbn:${isbn}&service=readarr`;

            // Placeholder for search image
            const img = document.createElement('img');
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB/lBMVEUAAADr6urr6+vj4uLf3t7T0tLs7Ozk5OTo6Ojh4ODa2dnMysq9u7vl5eXl5eXo6Ojm5eXm5eXa2dnEwsLDwcHt7e3o6Ojo6Ojf3t7f39/Ny8vs7Ozk5OTg4ODh4ODh4eHg39/e3t7Z2Ni+vLzg4ODg39+OIiLu7u7s7OxEPDxIOzt6dHTV1NTRz8+VkJCuq6tjXFxMRERGPT3S0dHezc19eHh5KSmPJCTOra2hhISHgoJORkZOPj7t6+vk4+Pm3Nzk2dnf0tLbxsbPvr7Qr6+KhYWGgICOcXGxbGyIampvaWmtZGRHPz97KCiAJyd9JyeCJibn39/d3NzZ2Njj1tbVv7/Rt7fIoaG2d3dvaGivZ2eFZmasYWF/YGBfWVmmVlZ4VlZcVVWjTk5iS0ufR0dRQ0NcPT1MOztOOjqSKyvm5ubk5OTb29vXysrEw8PYwMDMvLzUubnLpaXHnp7DmprAkJCujY2sjY2Mhoa6hYW6f3+5fn6nfn6WdHSGYWGRXl6oW1tnT0+iTEygSUlgR0eVQ0ObPT1VOztSOzuQNjZgNjZ4Li50KiqMIyPo4eHd29va0NDDqanJqKjApKSUjo6+ioqog4OGgYGkenqbdnazcHBvamqqXl6EXV19W1uPVFSQU1OjUFBzTk5VQ0ORPDyZOTmVMTGKLy9+LS1uLS3eFpazAAAAJnRSTlMA9+29fSby49GSLiMH8vDTvbhKIBz819RaWCv44ZWGhYNXLAmHhyzB1uoAAAKQSURBVDjLdZN1W+NAEMa3LhTaQnGHu+w2TWppqUKNliv04HB3d3eXwzl3d/mWlxSaHrS8f+SZZ/a3OzN55gWsiqUZEp4oMVHEy80skoEYZeWJuQiGhbjpdxJuHAv4HFhG6rSaylaNVkeNQQ7/GpKiFCLSrjcY1TiuNhr0AQIJFaroebIY1fsdzt2KZWtjY/lSRb/TYH+M0pLZ+/JUyhw6ss3UlkJapbU+23FIQ6Smqa7qKxHZiwd98D81tuO9BFJc9sEXTpjxTg9zGxFTU/XhVzyfcE2dkB+ej4NWdjefeU0Nky+61LS6tE8aTF7r2wM74tBPyPIgOWhzudwe7/Nvwwww0vPU63G7XJuDBLwrA1Jx2euRL20ti83TDY+aOp3fg7O1ptn5l+/aPg8HxuRFIINL6od+Y5hl9LBvbXqyM2hqatn7OWrBsJMhPcUtBBKkc3wcwK5Utb3dEYm7tww6lAt4UGt80x1JWs7+WCJxx4ZRC3lABDXqhR0sovMaNmxrVmugCCTCVtz6gc2WRIF75XglTLoEOm4B3tMAU2K+KgpURwGmRE64yY34wCumSWZMw9ZOPKAqSI8pAZnMj/rBZu8/YMOHB3qSmwmk6WWBkZJ4wNmwfVwsBbICSAyexwP+OiiYXwxAAgf5T6svbgIXNacriCMIL0x2nRnvWVjbH2UKn9CfX3vriz24uf5yYYBAgYhevN1nmtu3YF8PMUvfnKmpHe+ikFIAwlKlQcIcOrb53OUD3QN9VveM7ShkJlPFKezap6M6v8HZX7G0ut6yukyvvcM/geTJgJVKkY2IQMQ4Dr2dQkJlSoz1KMZ6lbT1yHHaegJwXQkF8qh5xflZIEYyaSFt/6SkHJ4kQxq1/z/rcLf5qTds3gAAAABJRU5ErkJggg=='; // Add your base64 image data for the search icon here
            img.alt = 'Search in Readarr';
            img.style.width = '20px';
            img.style.height = '20px';
            button.appendChild(img);

            span.appendChild(button);
            return span;
        }

        // Create an error badge with an image
        function createErrorBadge() {
            const span = document.createElement('span');
            const img = document.createElement('img');
            img.src = 'data:image/webp;base64,UklGRk4DAABXRUJQVlA4TEEDAAAvMUAMEI/kqJEkR4rZXTDLH8odiXt5b5MG5EiSJCmeu8uNFLwx9FcIEfgxHY4jSXKUnMMU/HcGnOCltSyHkSSrSt/HEyNqMiGI74pswO53lyRJRGIcz9Hm2kiSZ0/J9toSiZGIj49DB5Wfn2tXyb69e3cJguCD4MAPQfBDsCAChQExUFgwItiwIwJBgxVBEKyGtAgmRMq0iLwRbALBA4ULahjoKViDGBTDMUrEOCYGTgIhzvwHUCXz3zIKBzSC+Y9AIxBEoJoa/yLGhvH8em1JIpZWz/Vn/WpM15gsBobBeH2+GN14fj8ZjV6CMgyTgCKIKcMg0bYtQ5Jej21PZJaNtm3bGttsW5Hlql9Wxsv4ghcR/XfgRpITde8UcIEMPW/ghinj+0CLQx21UY9dI+UJVXf1vgSiODewTG7Dz8G2cqfOTKw5y9v6f8NhBlexM/i8WedmCLtqRt/CSQxRKaLpRgdD2tE0CZQSVo4+9PiZBQe7f0FWUATLLTZmyap1RTAI5qqYZasF05GDuQomwRXzoEzWtlzFpFitQrp4q/ChhYm09vjmjZuK1pjILR+haKNn0CNe2/rtMqJztzbEK+uGM66MJEwjtrpx99KFixfurDOhfbOQNPjWpwZGYtzP16W7YhA1ft7hcdh0MHkgxwjED77VMpmguh97MOBmMkHucaA2JhfUDkvlDI/7KFD54rAThzsW4Bzu0GRD76wn2aD6KMkGRTzy4bHjQWjYNTSILt1BQteQuGcFut0CLt/BLniQuG8F3nARsM8+UuFqnNYeXr96jR6t4VTTpTOUnxcZ+cuuXieTbFffm3LZKn8F7bLVDtTvZkSYN2vehPqJexDoTw16RXQbtaKavxCHEQfqXruMvdccYxDnR++acHfneUUoNb8/5kYGpgIIPbiSNyEUmIJCdp9iEuL/s6dPlHr2X5wQPXBq8DzhaysTj7W8xUWtXyBWknSrspJuBVIm8btQKSdNTQOYYF5GYs8LQ/6FtK7ANOY/9visKNDzRVgGTwPNNFnobqaAUrgO6vsIroNSNWPvcR2UwVViB35MtJe7TN8GylnePvgPjjMGxzK+C7Q43FkfKeoEveHqrr7X4k6QAwA='; // Add your base64 image data for the error icon here
            img.alt = 'ISBN not found';
            img.style.width = '20px';
            img.style.height = '20px';
            img.title = 'ISBN not found'; // Tooltip
            span.appendChild(img);
            return span;
        }

        // Append the element next to the specified badge
        function appendElementAfterBadge(element) {
            const badge = document.querySelector('.ContributorLink__badge.ContributorLink__badge--medium');
            if (badge) {
                badge.parentNode.insertBefore(element, badge.nextSibling);
                console.log('Element appended after badge');
            } else {
                console.error('Badge element not found');
            }
        }

        // Main function to set up the script
        function setup() {
            const isbn = getISBN();
            if (isbn) {
                const searchButton = createSearchButton(isbn);
                appendElementAfterBadge(searchButton);
            } else {
                const errorBadge = createErrorBadge();
                appendElementAfterBadge(errorBadge);
            }
        }

        setup();
    });
})();

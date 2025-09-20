// ==UserScript==
// @name         TWB OBS Web Cleanup
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3pSURBVHgB7V15kBxVGf/1zOyZ7JE7JEsgB4kGBMSgUBgIIJeAYkVUPKhCObxKPIiCVmT1D0rAgxsUFVAOQW6KCMWRGCKxIoZgEi5NiEkIubNkd7O7M939+H7TPbuzszM7r6e7pyfU/Kp+tb09Pd2v+9fvfe/73vfeAFVUUUUVVVRRRRVVVFFFFeWFgf0HLOuBwpnCWcIxwhHCVuFI95guYYewW7hT+KbLjfAJ1d4eQ8O+iairmwwrXoOed5Po6tmJ+okbjfZ2GwGhkgXhQ54rPFE4TzgbjgClgAKtFS4RLha+4O4bFiJCPSY3HIl3ts3Hjq1nobNjDHbvSiHVYyIWt9DQqFBTtxW1tX9DIv6o8Ycn18AnKk2QFuG5wi8JjxPWIBykhMuE9wgfFL6be4C6/YY2dO5ux9qV87F2VRJW0pLdpjwyE0px24JhWLIt4sQsjGxJYWTTIvTFbzSeXr4bJaJSBDlJeLHw08J6lBc9wseEv4NTe6Duuu5wvLbmISx7bgz6elNpAYy0GI4A2WIYss39SAtjoq5Rmke73Vi6/r8oAVEKwmufKfyJ8BjN76wTLhI2CscJDxNOQ3BY/sOzT3vg6hnjF2LZM+ivDYZbMwzZVmkBMvszYqTS+w1XGMS6URP/vvHipnXwiKgEYY34tfAIjWM7hXcL74AjwA+EhyIETGptxrPzT8Xkl5ea9Ua8qzamWHtym6nB2xRA9W+LYCJKTL6TENvS1LjAePpVT81XDOXFAcJ7hc+huBi9wl8KpwpvFt4m/CNCEoO46tTjMWHtCvTaRmKXabXuNO0WWxkqx2YMbMOtMc62nRaDtUbJtpkcLUKep9rnJbyUoZyCXCJ8XXiexrFLhIcLFwjPEb4kPAoh4phpB+HU1B6YvX2wlAJf+04LjRv6zLY9tj3SrRmOzTD6mymzv5lShmtP3G1b/iZTx2NV8iAv5SiHIE1wagXf8OYixyrh1cKThTSKFPF2lMHQnztrKhKbNsDpSsmTVulXHSmlYluSauJbIoypWLx005TKEsbsrxlp+8HPKZRsd3elYJsf91KOsAX5sHAl9GoF22v2si4X0tG6QHgrymDnYoaBs8Y1wUylRAhbaoiRriWWnW6P0tsd0ny91mvP7LTsunQzpTJNVr8Yznb6K8rpkdk0/Ooo5eEewhTkNDgO2AyNY7vd459w//+g8CaUqdMxRYz56GRPf81gTbCc9mjQdpdt16/elzp0u6Wa8zZTmZoBV5iYbFvWKFx8brGWoR+eDI4HfBFOr6hW41g6aZ+FIx4RF94Hp2tbFoxvGonkrh39zZRjQwwkpkxDfdsUWKbYaEtqj2lKLTLjmyzrMDWibt2ExobtUr1sxBI2DHEOt27qwob/9fWLwRrT16vENxmLPM5nPoQhyDfgvN26te97wqey/mfzptMdDgyJmPRTkymnmVIDzdSEr1yC2gOnwuzphrmvG1ZPD1Ly1+zriXXa6pC61lGtrS3NHUhIQCEhj3Lblk78pn1NvxjpyiXNVq2hHXEIWhDWDC9i3A+nS5sBv/djlBl9SYmMiCiZpslym6ktd92CxMQ2qR3S8piWU0OElm3DFrvzNoyx00e1bmtrHbEFRkJh84bOQWLQ+Cdq4uIkmrplCVIQ2oA7oS8Go7Hfztl3Ahz7UVZs6tgLu67NabLUQJPV+/+3YG1YPyCSSnuJA9sKxlao2UePqN0+rTa+OUcMp0vcPLoG9fEO3bIEZdTZm3oI3oKBV8ARJRufRATYIU3RlpQaJIaZtZ0RIO0Rcp8jhtsJQGx5V3LuFtNqzhHDMe5NzXtx5W936ZYlCEHYg3gA3kLjHKO4M8/+0xEB6F48tb0DlmEUEEOla4bpimG5Yljudp9SNYv3Jk/stfk86aO4YiTE2I8es8owDKVbliAEoeOm07XNxjVwan9uWWYhIjyxeQesEc39YliDakbWdo4YlrvdaamWRR09cx1nkTXFtjBpShzNY1d4KYdfQehJfw7ewPb0vjz7OQIY1vhHUbz+bhce7+hNG+uBWoJBNcPMEcNtslx7orAxZc9c2pmcnRajtl5h5qGvGguv9RTx9SMIA4XXwDseFu7Ls38CIkRKvPJb3tomPaeEONgDNsNWQ2tDZtvOEsMx9hJ0606esMNS9Thijo2WqQ/CI/wI8isUj03lwyMF9vcgYuxKmliwbie6XDHMoQZ8UM0wc8Rgs0Y3cMnYg0/BjMPuNC6/XMsZzEapoYnj4URkvX6f9ylhaezN89koYclDn0FiVkMNrmhrkfFk8dBtNaSZsvLUDIqhxEFMjZ2AO9a/g/W7OzjmsxgeUYog/M7LKM2bXg0nrJ4PrK17UFqtCxwtiTjOP6AFcxoTSJiptDBWjs3oF0PsTt3YcVht1+LhN9ZjTw+HctJB1TlwItjaKEWQs4WPozT8BcNHfp9ERL5IIUwfWY/jRjfh6JZGNMsrk5KIcEo8dRVPwKhvQEcsgVc6e7BCus0bxcE07UEZQRyiXoSQsRyO6qXwF0XOfZmPc4dKeXPVmPpaNaO1SX1gTKua3tqsWupqletjFOI/EDJO0r2BArysyPknCZM+r1FpPBEe4LWXdTH8obfI51uEf8X7CxchJDCJjf6Dn7flUo3rMLjY6/M6umSvjqmpTJw4BU5GC32HbQFeg88slI7KhfBfuJ9pXmthANfS4YUFrs9BMo7r/x7+X0LyqwgBi+G/YDdqXqsmoOsNxz9BD4wgMCLR5eNazyFgMPE5CGP7DPTBJvKVAK6Zj88L6+ANU+CknJZyvT6UniieF2cAgTyInfCG8cK/B3TtDGkj/KQVsfkppRk7DQHiGgBBPZCZ8AY2X9fDCbv4uS5jZTTaQQw5HAmnR+jl+sV8ME9YAX8PI5sLUBqYuVhKbWGEg4l6QY+1MMV1nYdy/BMBgeEVPwYtly/CHz4ivEG4eZhr0N79C07CxHSEB577HejdN5PGi4aqdGJZnEbme0pYDjgGvwr+wcgx31TamvTwBRwfgjnEKZQHHxUuhV4noU34NnziEwiudmR4F95f+Bb07vskBIBvAghaEL7NfFPYBjNj8Rbhl+GMiUQJdu8ZT2Ot85I5yZaGvkax+/46AsBPAagykW0/h3jnoDyYLPwRnJzi7XnKw/SdZ+H0zor1Dg9BcV9tIQLAtSifINlkVuM4hAP22OjkmR7KQ/v0qPDoYc57W5FzlJKDMAS3IhpBSBroExAcGORj6qoXIfKRDz5fkzalyLlvRQC4G/4K75d06D4D/zhYuCbAcnHe++w813lkmO/cjQAQtSAkY0FzUToYXt8aQrl4zlyH8xyELEiUTVY2aXQnwzvoq3jxqL2SDupBWddrQGFHumiTpRPX6UJlgAb+engHu9RBzmXPBV8SrgiReZZsYguNpe9FEegI0onKwXx4i5oyefvzCB9cBiR7akWh8FDRZ6kjiNeQedi4UvM43lugEdYi+DmcGcfE6gLHFH2WOoK8icrCscKPaRz3KZR3ahwH1L7mbq8vcEwgz5LBRVVhvKl4sYftfobFTKb7pAKfl9IpGYKgw+9B8N9FykynrS+isrEb3JRn/15oRNd1miyebC0qC0wVig/zOcdMdKZkhwEmxuV78HyGqtiXdYczl6CywL7+xGE+PxLRgS9DvoSGJdCAriCLUXkYroaMR3Sgv5TvZXkeGtAVhMvhlWsEThfDCdKE6MBVG6bm7GNYXivxWlcQGvVlqBwwFL51mM+jjC4w2pvb3eYg3D6dL3tJibkHlYNNGH4KnPa88BDApIdjc/ZpPzsvgjDBLPJ5gC5WFvnc93KtPsB5hdlrZLFmPKT7ZS+C8EKPoTJQrBxMAQpscWOPoP1qyPqfZS0aVCwV7GOriMmpCqM1yrokgrLRGf1Pzr55CBkvAlAR8mbNcgYxfcIrc5McytIROhPlv9EMacN040FsNt6OsKzkGSgDGBZYCUBFQJ0ZWNkII6dMly+hjJgHx2jmvr1h3iCnYnudxn1/yGUqRD4bPzkAJSE3+YG1ZrgEaD+kY+V1nt5FIZVFh5GkyjJe05FTEC5oH3RCAWddeZ19xPmB5Zo4mktOJI0slpbbk2FV/Q6c+Xt+b4xdSK46F/dWpHQa6t4Arl8qL0DEuBdDRfkunASDF+D9hhgL4gp1H4J38JpRivFnVADomb6BoYXjwvnsejIj4zo4czYK3QgjyZxhdBWGRkp1QGN/qXueqMR4DQM/vRQ5GN1kiktuITlKdlzWcbQ7nODCBAQuQnO6+7+fcDnzaZ9BdEKQDCuVUqNDBVdCyDeOzbkgtClBTy1jr4upN/lehHKSnYeTUaH4AgrPlmVYgbaB8TA/M2E5ns4msAPRCpF52byuOVl2cJZQsSnMHFzishXnw8nSKLT4JW0D5+XxVxM4t+JVRC9CthiXYD8Ba4qXNBz2rDjoxJUbXnLJZLOwvX8/zVTF14xccIIjjV0lPlA/pM0KdFWGcoK9r3xd4v2V7NpWXG/KK9ilrYRJP35Jp69i/IwgwDBLJfSMvJKxqcjDIWGBjiF9ktzQfaWS3fRIV9wuF+bBSZiuVCGYJFH28YxKANNldFZAKBeZXch1ifennzUPBfTe+YsJQaxv6JW8JiPW81DFEDA+xRXbWGvCnN/Bc3PJjAtQIUubZ1DJVZOjhGzSMj9wz7nmpXY76cxl/8A903O0cm3Ljf2trWRci7EvLgTDH4ChQFxBKDPEyyTrDvcv83vfcOl7jaoqqqiiiiqqqKKKKqqooor3K94Dl2hQQtKkNiAAAAAASUVORK5CYII=
// @namespace    https://github.com/upamanyudas/violetmonky-scripts
// @version      0.1
// @description  Remove unwanted buttons/elements from OBS Web
// @match        https://obs-web.niek.tv/*
// @author       Upamanyu Das
// @grant        none

// @homepage     https://github.com/upamanyudas/violetmonky-scripts
// ==/UserScript==

(function() {
    'use strict';

    // Configurable list of match phrases/symbols
    const removalPhrases = [
        "⌘", "⇊"
    ];

    // Which element types and attributes to check
    const elementConfigs = [
        {selector: "button", attr: "title"},  // buttons by title
        // {selector: "div", attr: "title"},     // divs by title
        // {selector: "span", attr: "title"},    // spans by title
        // Add more rules here if needed
    ];

    // Helper: check if text matches removal phrases
    function shouldRemove(text) {
        return removalPhrases.some(phrase => text && text.includes(phrase));
    }

    // Main removal function
    function removeUnwantedElements() {
        elementConfigs.forEach(config => {
            document.querySelectorAll(config.selector).forEach(el => {
                const text = el.getAttribute(config.attr);
                if (shouldRemove(text)) {
                    // If element is inside <li>, remove the li; otherwise remove element itself
                    const liParent = el.closest("li");
                    if (liParent) {
                        liParent.remove();
                        console.log(`Removed <li> with ${config.selector}[${config.attr}*="${text}"]`);
                    } else {
                        el.remove();
                        console.log(`Removed ${config.selector}[${config.attr}*="${text}"]`);
                    }
                }
            });
        });
    }

    // Wait until "Disconnect" button appears, then run
    function waitForDisconnectButton() {
        const btn = document.querySelector('button[title="Disconnect"]');
        if (btn) {
            console.log("Disconnect button found — running cleanup");
            removeUnwantedElements();
        } else {
            setTimeout(waitForDisconnectButton, 1000);
        }
    }

    waitForDisconnectButton();

})();

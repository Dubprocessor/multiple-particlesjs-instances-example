/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
window.onload = function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    particlesJS.load('particles-js2', 'particles2.json', function() {
        console.log('callback - particles.js2 config loaded');
      });
}

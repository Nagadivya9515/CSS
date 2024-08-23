 document.addEventListener('DOMContentLoaded', function() {
        // Select all elements with the class 'subpanel-toggle'
        document.querySelectorAll('.subpanel-toggle').forEach(function(toggle) {
            // Add a click event listener to each of them
            toggle.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
                // Find the nearest subpanel within the same parent element
                const subpanel = this.closest('.fields-wrapper').querySelector('.subpanel');
                // Toggle the 'hidden' class on the subpanel to show or hide it
                if (subpanel) {
                    subpanel.classList.toggle('hidden');
                }
            });
        });
    });

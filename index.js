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

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'subpanel-toggle'
    var toggles = document.querySelectorAll('.subpanel-toggle');

    // Loop through each toggle link
    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            // Find the nearest UL element with the class 'subpanel'
            var subpanel = this.closest('.fields-wrapper').querySelector('.subpanel');

            // Toggle the 'hidden' class on the subpanel
            if (subpanel.classList.contains('hidden')) {
                subpanel.classList.remove('hidden');
            } else {
                subpanel.classList.add('hidden');
            }
        });
    });
});

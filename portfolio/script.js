document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Find the target pane and activate it
            const targetId = button.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            // Short timeout ensures the CSS animation triggers smoothly
            setTimeout(() => {
                targetPane.classList.add('active');
            }, 50); 
        });
    });
});
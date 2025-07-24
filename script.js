// Daily UI Challenge - Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    console.log('Daily UI Challenge loaded successfully');
    
    // Add smooth animations
    const components = document.querySelectorAll('.challenge-component');
    
    components.forEach(component => {
        component.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        component.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
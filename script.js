document.addEventListener('DOMContentLoaded', function() {
    // Navegação suave
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove destaque de todos os links
            navLinks.forEach(function(navLink) {
                navLink.style.background = 'transparent';
                navLink.style.color = '#8b4a6b';
            });
            
            // Adiciona destaque ao link clicado
            this.style.background = '#8b4a6b';
            this.style.color = 'white';
            
            console.log('Navegação: ' + this.textContent);
        });
    });
    
    // Efeito hover nas imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery-row img');
    
    galleryImages.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 4px 8px rgba(139, 74, 107, 0.3)';
        });
        
        img.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Efeito nos ícones sociais
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(function(icon) {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Efeito de clique
            this.style.background = '#6b3552';
            
            setTimeout(() => {
                this.style.background = '#8b4a6b';
            }, 200);
            
            console.log('Rede social clicada: ' + this.textContent);
        });
    });
    
    // Animação simples para as seções
    const sections = document.querySelectorAll('.welcome-section, .about-section, .products-section');
    
    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            // Efeito visual sutil
            this.style.background = '#f9f2f6';
            
            setTimeout(() => {
                this.style.background = 'transparent';
            }, 300);
        });
    });
    
    console.log('Site da loja de artesanato carregado com sucesso!');
});
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0,188,212,0.3)';
            this.style.transition = 'all 0.3s ease';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        option.addEventListener('click', function() {
            const page = this.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '');
            let targetPage;
            switch(page) {
                case '尖端服務':
                    targetPage = 'services.html';
                    break;
                case '靈活定價':
                    targetPage = 'pricing.html';
                    break;
                case '專業團隊':
                    targetPage = 'about.html';
                    break;
                default:
                    targetPage = 'index.html';
            }
            window.location.href = targetPage;
        });
    });

    // 添加頁面切換動畫
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    window.onload = function() {
        document.body.style.opacity = '1';
    };

    // 添加打字機效果
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    });
});

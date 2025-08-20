// ملف script.js
document.addEventListener('DOMContentLoaded', function() {
    // تنفيذ شريط التقدم عند التمرير
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // وظيفة لتفعيل أشرطة المهارات عند التمرير إليها
    function activateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // تفعيل أشرطة المهارات عند التمرير
    window.addEventListener('scroll', function() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (sectionPosition < screenPosition) {
                activateSkillBars();
            }
        }
    });
    
    // تفعيل التنقل النشط
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // تنفيذ تأثيرات الرسوم المتحركة عند التمرير
    const animatedElements = document.querySelectorAll('.animated');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // التحقق من التمرير عند التحميل والتمرير
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
    // إضافة تأثيرات تفاعلية إضافية
    function addInteractiveEffects() {
        // تأثير عند النقر على عناصر التنقل
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // إزالة النشط من جميع الروابط
                navLinks.forEach(l => l.classList.remove('active'));
                
                // إضافة النشط للرابط المختار
                this.classList.add('active');
                
                // التمرير إلى القسم المطلوب
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // تأثير عند التحويم على بطاقات الدورات
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // تأثير عند التحويم على عناصر المهارات
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach(category => {
            category.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            });
            
            category.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.05)';
            });
        });
        
        // تأثير عند التحويم على العناصر الزمنية
        const timelineContents = document.querySelectorAll('.timeline-content');
        timelineContents.forEach(content => {
            content.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            content.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // تأثيرات للوسائط الاجتماعية
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) rotate(5deg)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0)';
            });
        });
    }
    
    // تفعيل التأثيرات التفاعلية
    addInteractiveEffects();
    
    // تهيئة أولية لأشرطة المهارات
    setTimeout(activateSkillBars, 1000);
    
    // إضافة مؤقت لتحديث تقدم المهارات بشكل دوري (للتأثير البصري)
    setInterval(function() {
        skillBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width || '0');
            const targetWidth = parseInt(bar.getAttribute('data-width'));
            
            if (currentWidth < targetWidth) {
                bar.style.width = (currentWidth + 1) + '%';
            }
        });
    }, 20);
    
    // تأثير كتابة النص في العنوان (لإضافة لمسة تفاعلية)
    function typeWriterEffect() {
        const titleElement = document.querySelector('.header-content h1');
        if (!titleElement) return;
        
        const originalText = titleElement.textContent;
        titleElement.textContent = '';
        let i = 0;
        
        function type() {
            if (i < originalText.length) {
                titleElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        // بدء تأثير الكتابة بعد ثانيتين من التحميل
        setTimeout(type, 2000);
    }
    
    // تفعيل تأثير الكتابة
    typeWriterEffect();
    
    // إضافة زر للعودة إلى الأعلى
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopButton.style.position = 'fixed';
        backToTopButton.style.bottom = '20px';
        backToTopButton.style.right = '20px';
        backToTopButton.style.width = '50px';
        backToTopButton.style.height = '50px';
        backToTopButton.style.borderRadius = '50%';
        backToTopButton.style.background = 'linear-gradient(to right, var(--primary), var(--secondary))';
        backToTopButton.style.color = 'white';
        backToTopButton.style.border = 'none';
        backToTopButton.style.cursor = 'pointer';
        backToTopButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        backToTopButton.style.zIndex = '1000';
        backToTopButton.style.fontSize = '20px';
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        backToTopButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        backToTopButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(backToTopButton);
        
        // إظهار الزر عند التمرير لأسفل
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
            } else {
                backToTopButton.style.opacity = '0';
            }
        });
    }
    
    // إضافة زر العودة إلى الأعلى
    addBackToTopButton();
    
    // تأثيرات تحميل الصفحة
    function addPageLoadEffects() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(function() {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    // تفعيل تأثيرات تحميل الصفحة
    addPageLoadEffects();
});

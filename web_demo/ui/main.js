window.addEventListener("DOMContentLoaded", (event)=> {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    const colors = ['#ff4b1f', '#1fddff', '#745', '#ffc107', '#6f42c1'];

    class Particle {
      constructor(radius, angle, speed, color) {
        this.radius = radius;
        this.angle = angle;
        this.speed = speed;
        this.color = color;
      }

      update() {
        this.angle += this.speed;
        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * (canvas.width / 2);
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.002 + Math.random() * 0.01;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(radius, angle, speed, color));
    }

    let textAngle = 0;

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Moving text
      const text = "✨ Welcome to CANHEIT2025 ✨";
      const textRadius = 200;
      const textX = centerX + Math.cos(textAngle) * textRadius;
      const textY = centerY + Math.sin(textAngle) * textRadius;

      ctx.font = "48px Arial";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, textX - ctx.measureText(text).width / 2, textY);

      textAngle += 0.01;

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    });
});

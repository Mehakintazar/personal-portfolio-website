<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mehak Intazar - AI Enthusiast Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

  <!-- Hero Section -->
  <section id="hero">
    <div class="hero-content">
      <h1>Hi, I am Mehak Intazar</h1>
      <p>AI Enthusiast | Software Engineering Student | Machine Learning, Deep Learning |Web dovelpment</p>
      <a href="#about" class="btn">Know More</a>
      <a href="#projects" class="btn">My Projects</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <h2>About Me</h2>
    <div class="about-content">
      <img src="me.jpg" alt="Mehak Intazar" class="profile-pic">
      <p>
        I am a Software engineering student passionate AI and machine learning enthusiast currently pursuing a degree in software engineering. 
        My expertise includes designing AI models, building intelligent systems, and diving deep into neural networks.
        I love using technology to solve real-world problems and strive to push the boundaries of what's possible with AI.
      </p>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services">
    <h2>My Expertise</h2>
    <div class="services-cards">
      <div class="card">
        <i class="fas fa-robot"></i>
        <h3>AI Development</h3>
        <p>Designing and developing AI-powered applications that solve complex problems.</p>
      </div>
      <div class="card">
        <i class="fas fa-brain"></i>
        <h3>Machine Learning</h3>
        <p>Building machine learning models for predictive analytics, data classification, and more.</p>
      </div>
      <div class="card">
        <i class="fas fa-network-wired"></i>
        <h3>Deep Learning</h3>
        <p>Implementing deep learning algorithms using neural networks to drive innovation.</p>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h2>My Projects</h2>
    <div class="slider">
      <div class="slide" id="slide1">
        <img src="pro1.jpg" alt="Project 1">
        <p>AI-Powered Recommendation System</p>
      </div>
      <div class="slide" id="slide2">
        <img src="proj2.jpg" alt="Project 2">
        <p>Deep Learning-Based Image Classifier</p>
      </div>
      <div class="slide" id="slide3">
        <img src="https://via.placeholder.com/300" alt="Project 3">
        <p>Machine Learning Prediction Model</p>
      </div>
    </div>
    <div class="slider-controls">
      <span class="prev">&#10094;</span>
      <span class="next">&#10095;</span>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Me</h2>
    <form action="mailto:mintazar630@gmail.com" method="post">
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2024 Mehak Intazar - AI Enthusiast. All Rights Reserved.</p>
  </footer>

  <script src="slider.js"></script>
</body>
</html>

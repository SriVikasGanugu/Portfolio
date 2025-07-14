<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Animation -->
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800">
        <div class="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div class="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style="animation-delay: 1s;"></div>
        <div class="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style="animation-delay: 2s;"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <!-- Profile Image Placeholder -->
          <div class="mx-auto w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <i class="fas fa-user text-4xl text-white"></i>
          </div>

          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span class="gradient-text">Sri Vikas Ganugu</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Engineer passionate about implementing innovative scalable applications.
          </p>

          <!-- Animated Typewriter Effect -->
          <div class="text-lg md:text-xl text-primary-400 mb-8 h-8">
            <span class="typewriter">{{ currentText }}</span>
            <span class="animate-pulse">|</span>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="scrollToSection('projects')" class="btn-primary">
              <i class="fas fa-rocket mr-2"></i>
              View My Work
            </button>
            <button @click="scrollToSection('contact')" class="btn-secondary">
              <i class="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </div>

          <!-- Scroll Indicator -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i class="fas fa-chevron-down text-gray-400 text-2xl"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-20 bg-white dark:bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center card p-8">
            <div class="text-4xl font-bold gradient-text mb-2">3+</div>
            <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div class="text-center card p-8">
            <div class="text-4xl font-bold gradient-text mb-2">20+</div>
            <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div class="text-center card p-8">
            <div class="text-4xl font-bold gradient-text mb-2">15+</div>
            <div class="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50 dark:bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">About Me</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies and a drive for creating innovative solutions.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <!-- Personal Info -->
          <div class="space-y-8">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h3>
              <div class="space-y-4">
                <div v-for="info in personalInfo" :key="info.label" class="flex items-center">
                  <div class="w-32 text-gray-600 dark:text-gray-400 font-medium">{{ info.label }}:</div>
                  <div class="text-gray-900 dark:text-white">{{ info.value }}</div>
                </div>
              </div>
            </div>

            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
              <div class="space-y-4">
                <div v-for="edu in education" :key="edu.degree" class="border-l-4 border-primary-500 pl-4">
                  <div class="font-semibold text-gray-900 dark:text-white">{{ edu.degree }}</div>
                  <div class="text-gray-600 dark:text-gray-400">{{ edu.institution }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-500">{{ edu.year }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills & Interests -->
          <div class="space-y-8">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Competencies</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in coreSkills" :key="skill.name" 
                     class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <i :class="skill.icon" class="text-primary-600 text-lg"></i>
                  <span class="text-gray-900 dark:text-white">{{ skill.name }}</span>
                </div>
              </div>
            </div>

            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Interests & Hobbies</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="interest in interests" :key="interest" 
                      class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  {{ interest }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Timeline -->
        <div class="mb-20">
          <h2 class="section-title text-center">Professional Experience</h2>
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-dark-700"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12">
              <div v-for="(experience, index) in experiences" :key="experience.company" 
                   class="relative flex items-center"
                   :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
                
                <!-- Timeline Dot -->
                <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800"></div>
                
                <!-- Content Card -->
                <div class="ml-12 md:ml-0 md:w-5/12" :class="index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'">
                  <div class="card p-6">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ experience.title }}</h3>
                      <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">{{ experience.duration }}</span>
                    </div>
                    <div class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ experience.company }}</div>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ experience.description }}</p>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in experience.technologies" :key="tech" 
                            class="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements Section -->
        <div class="mb-20">
          <h2 class="section-title text-center">Achievements & Certifications</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="achievement in achievements" :key="achievement.title" 
                 class="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <i :class="achievement.icon" class="text-4xl text-primary-600 mb-4"></i>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ achievement.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">{{ achievement.description }}</p>
            </div>
          </div>
        </div>

        <!-- Download Resume -->
        <div class="text-center">
          <a href="/SriVikasGanugu_resume.pdf" download 
             class="btn-primary inline-flex items-center">
            <i class="fas fa-download mr-2"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white dark:bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">My Projects</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              selectedCategory === category 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in filteredProjects" :key="project.id" 
               class="card overflow-hidden group cursor-pointer"
               @click="openProjectModal(project)">
            
            <!-- Project Image -->
            <div class="relative h-48 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <i :class="project.icon" class="text-6xl text-white opacity-80"></i>
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
                <span class="text-sm text-primary-600 dark:text-primary-400 font-medium">{{ project.category }}</span>
              </div>
              
              <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{{ project.description }}</p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" 
                      class="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" 
                      class="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                  +{{ project.technologies.length - 3 }} more
                </span>
              </div>

              <!-- Project Links -->
              <div class="flex space-x-3">
                <a v-if="project.liveUrl" 
                   :href="project.liveUrl" 
                   target="_blank"
                   @click.stop
                   class="flex-1 text-center py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  Live Demo
                </a>
                <a v-if="project.githubUrl" 
                   :href="project.githubUrl" 
                   target="_blank"
                   @click.stop
                   class="flex-1 text-center py-2 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200">
                  <i class="fab fa-github mr-2"></i>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button @click="loadMoreProjects" class="btn-secondary">
            <i class="fas fa-plus mr-2"></i>
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50 dark:bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">Skills & Expertise</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with.
          </p>
        </div>

        <!-- Skills Categories -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <!-- Frontend Skills -->
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <i class="fas fa-code text-3xl text-primary-600 mr-4"></i>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Frontend Development</h3>
            </div>
            <div class="space-y-6">
              <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                       :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <i class="fas fa-server text-3xl text-primary-600 mr-4"></i>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Backend Development</h3>
            </div>
            <div class="space-y-6">
              <div v-for="skill in backendSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                       :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Database & Cloud Skills -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <!-- Database Skills -->
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <i class="fas fa-database text-3xl text-primary-600 mr-4"></i>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Database & Cloud</h3>
            </div>
            <div class="space-y-6">
              <div v-for="skill in databaseSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                       :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & DevOps -->
          <div class="card p-8">
            <div class="flex items-center mb-6">
              <i class="fas fa-cogs text-3xl text-primary-600 mr-4"></i>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Tools & DevOps</h3>
            </div>
            <div class="space-y-6">
              <div v-for="skill in toolsSkills" :key="skill.name" class="skill-item">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</span>
                  <span class="text-sm text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                  <div class="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                       :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Grid -->
        <div class="mb-20">
          <h3 class="section-title text-center">Technologies I Work With</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div v-for="tech in technologies" :key="tech.name" 
                 class="card p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                 @click="showTechDetails(tech)">
              <i :class="tech.icon" class="text-4xl text-primary-600 mb-4"></i>
              <div class="font-medium text-gray-900 dark:text-white">{{ tech.name }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ tech.category }}</div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="mb-20">
          <h3 class="section-title text-center">Soft Skills & Competencies</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="skill in softSkills" :key="skill.name" 
                 class="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <i :class="skill.icon" class="text-4xl text-primary-600 mb-4"></i>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">{{ skill.description }}</p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div>
          <h3 class="section-title text-center">Certifications & Training</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="cert in certifications" :key="cert.name" 
                 class="card p-6 hover:scale-105 transition-transform duration-300">
              <div class="flex items-center mb-4">
                <i :class="cert.icon" class="text-3xl text-primary-600 mr-4"></i>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">{{ cert.name }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">{{ cert.issuer }}</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ cert.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-primary-600 dark:text-primary-400">{{ cert.year }}</span>
                <span v-if="cert.valid" class="text-sm text-green-600 dark:text-green-400">Valid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white dark:bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">Get In Touch</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <!-- Contact Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div class="space-y-6">
                <div v-for="contact in contactInfo" :key="contact.type" 
                     class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200">
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <i :class="contact.icon" class="text-primary-600 dark:text-primary-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">{{ contact.type }}</h4>
                    <p class="text-gray-600 dark:text-gray-400">{{ contact.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
              <div class="grid grid-cols-2 gap-4">
                <a v-for="social in socialLinks" :key="social.name"
                   :href="social.url"
                   target="_blank"
                   class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-all duration-200 hover:scale-105">
                  <i :class="social.icon" class="text-2xl text-primary-600 dark:text-primary-400"></i>
                  <span class="font-medium text-gray-900 dark:text-white">{{ social.name }}</span>
                </a>
              </div>
            </div>

            <!-- Availability Status -->
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Current Status</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-gray-900 dark:text-white font-medium">Available for new opportunities</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400">
                  I'm currently open to full-time positions, freelance projects, and interesting collaborations.
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    :class="{ 'border-red-500': errors.name }"
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    :class="{ 'border-red-500': errors.email }"
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                  :class="{ 'border-red-500': errors.subject }"
                />
                <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none"
                  :class="{ 'border-red-500': errors.message }"
                ></textarea>
                <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
                <i v-else class="fas fa-paper-plane mr-2"></i>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Quick Contact Options -->
        <div class="text-center">
          <h3 class="section-title">Quick Contact</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <a href="mailto:srivikasganugu@gmail.com" 
               class="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <i class="fas fa-envelope text-4xl text-primary-600 mb-4"></i>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
              <p class="text-gray-600 dark:text-gray-400">srivikasganugu@gmail.com</p>
            </a>
            
            <!-- <a href="https://linkedin.com/in/srivikasganugu" target="_blank"
               class="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <i class="fab fa-linkedin text-4xl text-primary-600 mb-4"></i>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h4>
              <p class="text-gray-600 dark:text-gray-400">Connect professionally</p>
            </a> -->
            
            <a href="https://github.com/srivikasganugu" target="_blank"
               class="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <i class="fab fa-github text-4xl text-primary-600 mb-4"></i>
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h4>
              <p class="text-gray-600 dark:text-gray-400">View my projects</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
         @click="closeProjectModal">
      <div class="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           @click.stop>
        
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200 dark:border-dark-700">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ selectedProject.title }}</h2>
            <button @click="closeProjectModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Project Details -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">{{ selectedProject.fullDescription }}</p>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Key Features</h4>
                  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in selectedProject.technologies" :key="tech" 
                          class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Image/Preview -->
            <div class="space-y-4">
              <div class="bg-gradient-to-br from-primary-500 to-purple-600 h-64 rounded-lg flex items-center justify-center">
                <i :class="selectedProject.icon" class="text-8xl text-white opacity-80"></i>
              </div>
              
              <!-- Project Links -->
              <div class="space-y-3">
                <a v-if="selectedProject.liveUrl" 
                   :href="selectedProject.liveUrl" 
                   target="_blank"
                   class="w-full btn-primary text-center">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  View Live Demo
                </a>
                <a v-if="selectedProject.githubUrl" 
                   :href="selectedProject.githubUrl" 
                   target="_blank"
                   class="w-full btn-secondary text-center">
                  <i class="fab fa-github mr-2"></i>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technology Details Modal -->
    <div v-if="selectedTech" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
         @click="closeTechModal">
      <div class="bg-white dark:bg-dark-800 rounded-xl max-w-2xl w-full p-6" @click.stop>
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <i :class="selectedTech.icon" class="text-4xl text-primary-600 mr-4"></i>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ selectedTech.name }}</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ selectedTech.category }}</p>
            </div>
          </div>
          <button @click="closeTechModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Experience Level</h3>
            <div class="flex items-center">
              <div class="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 mr-4">
                <div class="bg-gradient-to-r from-primary-500 to-purple-600 h-3 rounded-full"
                     :style="{ width: selectedTech.experience + '%' }"></div>
              </div>
              <span class="text-sm text-primary-600 dark:text-primary-400">{{ selectedTech.experience }}%</span>
            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Key Projects</h3>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li v-for="project in selectedTech.projects" :key="project">{{ project }}</li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Skills</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in selectedTech.skills" :key="skill" 
                    class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white dark:bg-dark-800 rounded-xl p-8 max-w-md w-full text-center">
        <i class="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button @click="showSuccessModal = false" class="btn-primary">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    // Typewriter Effect
    const typewriterTexts = [
      'Full Stack Developer',
      'React & Vue.js Expert',
      'Node.js Backend Developer',
      'UI/UX Enthusiast',
      'Problem Solver'
    ]
    const currentText = ref('')
    const currentIndex = ref(0)
    const currentCharIndex = ref(0)
    const isDeleting = ref(false)
    let typewriterInterval = null

    const startTypewriter = () => {
      typewriterInterval = setInterval(() => {
        const currentFullText = typewriterTexts[currentIndex.value]
        if (isDeleting.value) {
          currentText.value = currentFullText.substring(0, currentCharIndex.value - 1)
          currentCharIndex.value--
          if (currentCharIndex.value === 0) {
            isDeleting.value = false
            currentIndex.value = (currentIndex.value + 1) % typewriterTexts.length
          }
        } else {
          currentText.value = currentFullText.substring(0, currentCharIndex.value + 1)
          currentCharIndex.value++
          if (currentCharIndex.value === currentFullText.length) {
            setTimeout(() => {
              isDeleting.value = true
            }, 2000)
          }
        }
      }, 100)
    }

    // Smooth Scroll
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // About Section Data
    const personalInfo = [
      { label: 'Name', value: 'Sri Vikas Ganugu' },
      { label: 'Email', value: 'srivikasganugu@gmail.com' },
      { label: 'Location', value: 'The Colony, Texas' },
      { label: 'Experience', value: '3+ Years' },
      { label: 'Availability', value: 'Open to Opportunities' }
    ]
    const education = [
      { degree: 'Bachelor of Technology in Computer Science', institution: 'Osmania University', year: '2023' },
      { degree: 'Master of Science in Computer Software Engineering', institution: 'Arizona State University', year: '2024' }
    ]
    const coreSkills = [
      { name: 'Frontend Development', icon: 'fas fa-code' },
      { name: 'Backend Development', icon: 'fas fa-server' },
      { name: 'Database Design', icon: 'fas fa-database' },
      { name: 'Agile Development', icon: 'fas fa-database' },
      { name: 'AI/ML', icon: 'fas fa-database' },
      { name: 'API Development', icon: 'fas fa-plug' },
      { name: 'Cloud Services', icon: 'fas fa-cloud' },
      { name: 'DevOps', icon: 'fas fa-cogs' }
    ]
    const interests = [
      'Web Dev', 'Cloud Computing', 'Machine Learning', 'Coding', 'Game Dev', 'Gen AI', 'Project Management',
      'Semi-Conductors', 'Financial Markets', 'Chip Design'
    ]
    const experiences = [
      {
        title: 'Software Development Engineer II',
        company: 'Davita Inc.',
        duration: '2024 - Present',
        description: 'Leading development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved application performance by 40%.',
        technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
      },
      {
        title: 'Software Engineer - .NET Developer',
        company: 'Vivma Software Inc.',
        duration: '2020 - 2023',
        description: 'Developed responsive user interfaces and implemented modern web technologies. Collaborated with design teams to create intuitive user experiences.',
        technologies: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5', 'Git']
      }
    ]
    const achievements = [
      { title: 'AWS Certified', description: 'Solutions Architect Associate', icon: 'fab fa-aws' },
      { title: 'Best Developer', description: 'Company Award 2023', icon: 'fas fa-trophy' },
      { title: 'Open Source', description: '10+ Contributions', icon: 'fab fa-github' }
    ]

    // Projects Section Data
    const selectedCategory = ref('All')
    const selectedProject = ref(null)
    const displayedProjects = ref(6)
    const categories = ['All', 'Web App', 'ML/AI', 'Java', 'Game Dev']
    const projects = [
      {
        id: 8,
        title: 'Scrum Simulator',
        category: 'Java',
        description: 'Led a 6-person Agile engineering team to build a full-stack SCRUM simulation platform using Java and the MAMP stack, implementing MVC architecture and role-based access control, improving team workflow efficiency by 35%.',
        fullDescription: 'Led a 6-person Agile engineering team to build a full-stack SCRUM simulation platform using Java and the MAMP stack, implementing MVC architecture and role-based access control, improving team workflow efficiency by 35%. Designed and integrated a “Trainee” role to emulate real-world blockers within the SCRUM simulator, increasing sprint simulation accuracy in high-friction development scenarios. Applied SOLID principles and object-oriented design to enhance code maintainability, reducing bugs by 10% through rigorous unit testing with JUnit in a test-driven development environment.',
        icon: 'fas fa-users-cog',
        technologies: ['Java', 'MAMP', 'MVC', 'JUnit', 'Agile', 'SOLID', 'OOP', 'TDD'],
        features: [
          'Full-stack SCRUM simulation platform',
          'MVC architecture, role-based access control',
          'Trainee role for real-world blockers',
          'SOLID principles, OOP',
          'JUnit, TDD',
          'Improved workflow efficiency by 35%',
          'Reduced bugs by 10%'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 9,
        title: 'Virtual Campus',
        category: 'Game Dev',
        description: 'Built an immersive 3D campus simulation in Unity with custom LOD systems and dynamic occlusion culling, optimizing performance for low-tier devices.',
        fullDescription: 'Built an immersive 3D campus simulation in Unity with custom Level of Detail (LOD) systems and dynamic occlusion culling, optimizing performance by reducing GPU workload by 50% for low-tier devices. Developed modular game systems using Object-Oriented principles in C#, including interactive UI elements and contextual audio mechanics for enhanced user engagement.',
        icon: 'fas fa-university',
        technologies: ['Unity', 'C#', '3D Simulation', 'LOD', 'Game Development'],
        features: [
          '3D campus simulation in Unity',
          'Custom LOD and occlusion culling',
          '50% GPU workload reduction',
          'Modular game systems (OOP, C#)',
          'Interactive UI, contextual audio'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 10,
        title: 'MovieDB',
        category: 'Web App',
        description: 'Developed a full-stack IMDB clone using MongoDB, Express, React, and Node.js with react hooks and access control.',
        fullDescription: 'Developed a full-stack IMDB clone using MongoDB, Express, React, and Node.js with react hooks and access control. Implemented Selenium-based automated testing pipelines with comprehensive test coverage, ensuring application reliability and consistent user experience.',
        icon: 'fas fa-film',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'React Hooks', 'Selenium'],
        features: [
          'Full-stack IMDB clone (MERN stack)',
          'React hooks, access control',
          'Selenium-based automated testing',
          'Comprehensive test coverage',
          'Reliable user experience'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 11,
        title: 'Automated Model Based Testing in Games',
        category: 'Game Dev',
        description: 'Game testing framework optimizing state-transition strategies, reducing execution time by 5% while maintaining 100% test coverage.',
        fullDescription: 'Designed and implemented a game testing framework that optimized state-transition strategies over traditional N+ test methods, reducing execution time by 5% while maintaining 100% test coverage. Led a team of 3 in evaluating and implementing diverse testing strategies, generating test paths using round-trip and sneak-path algorithms to enhance test coverage and efficiency.',
        icon: 'fas fa-gamepad',
        technologies: ['Game Testing', 'Model-Based Testing', 'Algorithms', 'Automation'],
        features: [
          'Game testing framework',
          'Optimized state-transition strategies',
          '5% execution time reduction',
          '100% test coverage',
          'Round-trip and sneak-path algorithms',
          'Team leadership (3 members)'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 1,
        title: 'Periodic Time Series Forecasting',
        category: 'ML/AI',
        description: 'Hybrid LSTM-Transformer model for weather forecasting, outperforming ARIMA and Prophet by 15% in MSE.',
        fullDescription: 'Developed a hybrid LSTM-Transformer model for weather forecasting, incorporating attention mechanisms to capture long-term seasonality and short-term trends, outperforming ARIMA and Prophet by 15% in MSE (0.00201). Performed hyperparameter tuning via GridSearchCV, placing top 5% in class for the project assignment.',
        icon: 'fas fa-chart-line',
        technologies: ['Python', 'LSTM', 'Transformer', 'Attention', 'GridSearchCV', 'ARIMA', 'Prophet'],
        features: [
          'Hybrid LSTM-Transformer model',
          'Attention mechanisms for seasonality/trends',
          'Outperformed ARIMA/Prophet by 15% in MSE',
          'MSE: 0.00201',
          'Hyperparameter tuning (GridSearchCV)',
          'Top 5% in class'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 2,
        title: 'ChatBot for Document Analysis',
        category: 'ML/AI',
        description: 'RAG architecture using Google Gemini and pgvector for document analysis, with advanced prompt engineering.',
        fullDescription: 'Designed an RAG architecture via Google’s AI Gemini and a vectordatabase built with pgvector on PostgreSQL after testing FAISS and Qdrant via OpenAI text embeddings and sentence-transformers on Python. Implemented prompt engineering which integrated knowledge retrieved from input document and AI’s existing knowledge on the topic, to provide a detailed explanatory output.',
        icon: 'fas fa-robot',
        technologies: ['Python', 'Gemini', 'pgvector', 'PostgreSQL', 'FAISS', 'Qdrant', 'OpenAI', 'sentence-transformers'],
        features: [
          'RAG architecture with Gemini',
          'pgvector on PostgreSQL',
          'Tested FAISS and Qdrant',
          'OpenAI text embeddings',
          'Advanced prompt engineering',
          'Detailed document analysis'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 3,
        title: 'Mathematical Reasoning in LLMs',
        category: 'ML/AI',
        description: 'Multi-agentic LLM framework for mathematical reasoning, achieving 88% accuracy on GSM8K.',
        fullDescription: 'Designed a multi-agentic LLM framework using specialized LLM agents for strategy selection, computation, and verification (GPT-4) to incorporate mathematical reasoning in LLMs. Evaluated performance of the framework against strategies like fine-tuning, COT prompting, and few-shot training on the GSM8K dataset, achieving 88% overall accuracy for 8-shot training and 56% for the agentic approach.',
        icon: 'fas fa-brain',
        technologies: ['Python', 'GPT-4', 'LLMs', 'Multi-Agent', 'GSM8K'],
        features: [
          'Multi-agentic LLM framework',
          'Specialized agents for strategy/computation/verification',
          'Compared with fine-tuning, COT, few-shot',
          '88% accuracy (8-shot), 56% (agentic)',
          'GSM8K dataset'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 4,
        title: 'Pose Capture',
        category: 'ML/AI',
        description: 'Real-time pose estimation system with 40ms latency and automatic screen capture triggers.',
        fullDescription: 'Built a pose estimation system leveraging TensorFlow’s MediaPipe to compare posture similarity between reference and live inputs with 40ms latency, enabling real-time feedback. Integrated automatic screen capture functionality with custom triggers based on pose matching thresholds, achieving 84% accuracy across 50+ testing scenarios. Presented the software at the Entrepreneur Development Committee funded by NGIT, receiving recognition for innovative approach to photography and human-computer interaction.',
        icon: 'fas fa-running',
        technologies: ['Python', 'TensorFlow', 'MediaPipe', 'Computer Vision'],
        features: [
          'Real-time pose estimation (40ms latency)',
          'Posture similarity comparison',
          'Automatic screen capture triggers',
          '84% accuracy (50+ scenarios)',
          'Presented at NGIT Entrepreneur Committee'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 5,
        title: 'Sprint Velocity Forecasting System',
        category: 'ML/AI',
        description: 'End-to-end ML pipeline for sprint velocity prediction, achieving 87% accuracy for agile teams.',
        fullDescription: 'Developed a end-to-end ML pipeline for sprint velocity prediction, achieving 87% accuracy for agile development teams via hyper-parameter tuning (GridSearchCV) and data cleaning. Implemented the solution using Flask and Docker, deployed on AWS EKS with auto-scaling capabilities.',
        icon: 'fas fa-tachometer-alt',
        technologies: ['Python', 'Flask', 'Docker', 'AWS EKS', 'ML', 'GridSearchCV'],
        features: [
          'End-to-end ML pipeline',
          '87% accuracy for agile teams',
          'Hyper-parameter tuning (GridSearchCV)',
          'Data cleaning',
          'Flask API, Dockerized',
          'Deployed on AWS EKS with auto-scaling'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 6,
        title: 'Design Automation for Construction',
        category: 'Java',
        description: 'Optimized a PCB routing solution for a construction company, reducing execution time from 17 minutes to 1 minute by developing a Java-based routing solution and removing redundant features and bugs for construction-scale design automation.',
        fullDescription: 'Optimized a PCB routing solution for a construction company, reducing the execution time from 17 minutes to just 1 minute by developing a Java-based routing solution. Removed redundant features and bugs for construction-scale design automation. Boosted software reliability by 30% through implementing test-driven development practices with comprehensive unit and integration testing, resulting in 45% fewer critical bugs across multiple sprints.',
        icon: 'fas fa-project-diagram',
        technologies: ['Java', 'JUnit', 'TDD', 'Algorithms', 'Design Automation'],
        features: [
          'Java-based PCB routing optimization',
          'Execution time reduced from 17 min to 1 min',
          'Removed redundant features and bugs',
          'Test-driven development (TDD)',
          'Comprehensive unit and integration testing',
          '45% fewer critical bugs across sprints'
        ],
        liveUrl: null,
        githubUrl: null
      },
      {
        id: 7,
        title: 'Cloud-Based Inventory Management System',
        category: 'Web App',
        description: 'Developed and deployed a scalable, cloud-based inventory management system for a retail client, enabling real-time tracking of product stock across multiple locations and enhancing order fulfillment processes.',
        fullDescription: 'Developed and deployed a scalable, cloud-based inventory management system for a retail client, enabling real-time tracking of product stock across multiple locations and enhancing order fulfillment processes. Utilized .NET Core with C# and AWS (EC2, Lambda, S3) for cloud infrastructure, React.js for front-end, and Node.js with Express.js for backend API development.',
        icon: 'fas fa-cloud',
        technologies: ['.NET Core', 'C#', 'AWS (EC2, Lambda, S3)', 'React.js', 'Node.js', 'Express.js'],
        features: [
          'Real-time inventory tracking across locations',
          'Order fulfillment process automation',
          'Cloud deployment on AWS',
          'Frontend in React.js',
          'Backend API in Node.js/Express.js',
          'Scalable and secure architecture'
        ],
        liveUrl: null,
        githubUrl: null
      }
    ]
    const filteredProjects = computed(() => {
      const filtered = selectedCategory.value === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory.value)
      return filtered.slice(0, displayedProjects.value)
    })
    const openProjectModal = (project) => {
      selectedProject.value = project
    }
    const closeProjectModal = () => {
      selectedProject.value = null
    }
    const loadMoreProjects = () => {
      displayedProjects.value += 3
    }

    // Skills Section Data
    const frontendSkills = [
      { name: 'React.js', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 }
    ]
    const backendSkills = [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'Microservices', level: 75 }
    ]
    const databaseSkills = [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 65 }
    ]
    const toolsSkills = [
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD', level: 75 },
      { name: 'Jest & Testing', level: 80 },
      { name: 'Webpack', level: 70 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Figma', level: 65 }
    ]
    const technologies = [
      { name: 'React', icon: 'fab fa-react', category: 'Frontend', experience: 90, projects: ['E-commerce Platform', 'Task Management App'], skills: ['Hooks', 'Context API', 'Redux'] },
      { name: 'Vue.js', icon: 'fab fa-vuejs', category: 'Frontend', experience: 85, projects: ['Portfolio Website', 'Admin Dashboard'], skills: ['Composition API', 'Vuex', 'Vue Router'] },
      { name: 'Node.js', icon: 'fab fa-node-js', category: 'Backend', experience: 88, projects: ['API Gateway', 'REST APIs'], skills: ['Express', 'Middleware', 'Authentication'] },
      { name: 'MongoDB', icon: 'fas fa-database', category: 'Database', experience: 85, projects: ['User Management', 'Content CMS'], skills: ['Mongoose', 'Aggregation', 'Indexing'] },
      { name: 'AWS', icon: 'fab fa-aws', category: 'Cloud', experience: 75, projects: ['Serverless Functions', 'S3 Storage'], skills: ['Lambda', 'EC2', 'S3'] },
      { name: 'Docker', icon: 'fab fa-docker', category: 'DevOps', experience: 80, projects: ['Containerization', 'Microservices'], skills: ['Dockerfile', 'Docker Compose', 'Registry'] }
    ]
    const softSkills = [
      { name: 'Problem Solving', icon: 'fas fa-puzzle-piece', description: 'Analytical approach to complex technical challenges' },
      { name: 'Team Collaboration', icon: 'fas fa-users', description: 'Effective communication and teamwork in agile environments' },
      { name: 'Time Management', icon: 'fas fa-clock', description: 'Efficient project planning and deadline management' },
      { name: 'Continuous Learning', icon: 'fas fa-graduation-cap', description: 'Staying updated with latest technologies and trends' },
      { name: 'Code Review', icon: 'fas fa-code-branch', description: 'Mentoring and maintaining code quality standards' },
      { name: 'Documentation', icon: 'fas fa-file-alt', description: 'Creating comprehensive technical documentation' },
    ]
    const certifications = [
      { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2023', valid: true, icon: 'fab fa-aws', description: 'Associate level certification for cloud architecture' },
      { name: 'React Developer', issuer: 'Meta', year: '2022', valid: true, icon: 'fab fa-react', description: 'Advanced React development and best practices' },
      { name: 'MongoDB Developer', issuer: 'MongoDB University', year: '2022', valid: true, icon: 'fas fa-database', description: 'Database design and optimization techniques' }
    ]
    const selectedTech = ref(null)
    const showTechDetails = (tech) => {
      selectedTech.value = tech
    }
    const closeTechModal = () => {
      selectedTech.value = null
    }
    onMounted(() => {
      startTypewriter()
      // Animate skill bars on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      })
      document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item)
      })
    })
    onUnmounted(() => {
      if (typewriterInterval) {
        clearInterval(typewriterInterval)
      }
    })

    // Contact Section Data & Logic
    const isSubmitting = ref(false)
    const showSuccessModal = ref(false)
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    const errors = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    const contactInfo = [
      { type: 'Email', value: 'srivikasganugu@gmail.com', icon: 'fas fa-envelope' },
      { type: 'Location', value: 'The Colony, Texas', icon: 'fas fa-map-marker-alt' },
      { type: 'Phone', value: '+1 (623) 759-8493', icon: 'fas fa-phone' },
      { type: 'Availability', value: 'Open to Opportunities', icon: 'fas fa-clock' }
    ]
    const socialLinks = [
      // { name: 'LinkedIn', url: 'https://linkedin.com/in/srivikasganugu', icon: 'fab fa-linkedin' },
      { name: 'GitHub', url: 'https://github.com/srivikasganugu', icon: 'fab fa-github' },
      // { name: 'Twitter', url: 'https://twitter.com/srivikasganugu', icon: 'fab fa-twitter' },
      { name: 'Portfolio', url: 'https://srivikasganugu.dev', icon: 'fas fa-globe' }
    ]
    const validateForm = () => {
      let isValid = true
      errors.name = ''
      errors.email = ''
      errors.subject = ''
      errors.message = ''
      if (!form.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
      }
      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email'
        isValid = false
      }
      if (!form.subject.trim()) {
        errors.subject = 'Subject is required'
        isValid = false
      }
      if (!form.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
      }
      return isValid
    }
    const submitForm = async () => {
      if (!validateForm()) return
      isSubmitting.value = true
      await new Promise(resolve => setTimeout(resolve, 2000))
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      isSubmitting.value = false
      showSuccessModal.value = true
      setTimeout(() => {
        showSuccessModal.value = false
      }, 5000)
    }

    return {
      // Hero
      currentText, scrollToSection,
      // About
      personalInfo, education, coreSkills, interests, experiences, achievements,
      // Projects
      selectedCategory, selectedProject, categories, filteredProjects, openProjectModal, closeProjectModal, loadMoreProjects,
      // Skills
      frontendSkills, backendSkills, databaseSkills, toolsSkills, technologies, softSkills, certifications, selectedTech, showTechDetails, closeTechModal,
      // Contact
      form, errors, isSubmitting, showSuccessModal, contactInfo, socialLinks, submitForm
    }
  }
}
</script>

<style scoped>
.typewriter {
  border-right: 2px solid #3b82f6;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #3b82f6; }
}
</style> 
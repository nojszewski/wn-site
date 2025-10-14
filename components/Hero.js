import { ChevronDown, User } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-8 animate-slide-up">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-2xl flex items-center justify-center">
              <User className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up delay-100">
            DevOps Engineer &
            <br />
            <span className="text-blue-600 dark:text-blue-400">Developer</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
            Building scalable infrastructure, automating workflows, and crafting elegant solutions
          </p>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up delay-300"
          >
            <span>Learn More</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  );
}

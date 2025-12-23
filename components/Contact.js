'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import pb from '../lib/pb';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await pb.collection('contact_messages').create({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skontaktuj się
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Masz projekt na głowie lub chcesz nawiązać współpracę? Chętnie porozmawiam!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informacje kontaktowe
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Github className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-400">github.com/yourusername</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-400">linkedin.com/in/yourprofile</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Imię
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Twoje imię"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="twoj.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Twoja wiadomość..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-800 dark:text-green-300 text-sm">
                    Wiadomość wysłana! Odpowiem wkrótce.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{loading ? 'Wysyłanie...' : 'Wyślij wiadomość'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
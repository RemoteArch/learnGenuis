import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage(){
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md px-10">
        <nav className="container mx-auto flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold text-gray-800">
            LearnGenius
          </a>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/formations" className="text-gray-600 hover:text-gray-800">
                Cours
              </NavLink>
            </li>
            <li>
              <a href='#apropos' className="text-gray-600 hover:text-gray-800">
                À propos
              </a>
            </li>
            <li>
              <a to="#conctact" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </li>
            <li>
              <NavLink
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Se connecter
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto  p-16">
        <section className="text-center flex items-center justify-center">
          <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenue sur LearnGenius
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Explorez notre vaste bibliothèque de cours en ligne et développez vos compétences.
          </p>
          <NavLink
            to="/formations"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Découvrir nos cours
          </NavLink>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Nos catégories de cours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Développement web
              </h3>
              <p className="text-gray-600">
                Apprenez les langages et frameworks pour créer des sites web
                modernes et performants.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Intelligence artificielle
              </h3>
              <p className="text-gray-600">
                Explorez les dernières avancées de l'IA et apprenez à
                développer des modèles d'apprentissage automatique.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Cybersécurité
              </h3>
              <p className="text-gray-600">
                Protégez vos systèmes et données contre les menaces
                cyber-sécuritaires.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-bold text-gray-800 my-4">
            Outils & Pédagogies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Plateforme d'apprentissage
              </h2>
              <p className="text-gray-600 mb-4">
                Explorez notre plateforme d'apprentissage en ligne, conçue pour
                une expérience d'apprentissage interactive et engageante.
              </p>
              <NavLink
                to="/learning-platform"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                En savoir plus
              </NavLink>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Outils de collaboration
              </h2>
              <p className="text-gray-600 mb-4">
                Découvrez nos outils de collaboration en ligne qui permettent de
                faciliter l'apprentissage en groupe et le travail d'équipe.
              </p>
              <NavLink
                to="/collaboration-tools"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                En savoir plus
              </NavLink>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Méthodes pédagogiques
              </h2>
              <p className="text-gray-600 mb-4">
                Explorez nos approches pédagogiques innovantes, conçues pour
                optimiser l'apprentissage et le développement des compétences.
              </p>
              <NavLink
                to="/pedagogical-methods"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 LearnGenius. Tous droits réservés.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Nous contacter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
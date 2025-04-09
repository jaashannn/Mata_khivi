import React from 'react';
import { Link } from 'react-router-dom';
import { Hand as Hands, Heart, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to{' '}
          <span className="text-orange-600">Gurudwara Seva Management</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Join us in serving the community through various seva opportunities
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg">
            <div>
              <span className="rounded-lg inline-flex p-3 bg-orange-50 text-orange-700 ring-4 ring-white">
                <Hands className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <Link to="/langar" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Langar Seva
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Volunteer for kitchen service, manage inventory, and contribute to feeding thousands daily.
              </p>
            </div>
          </div>

          <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg">
            <div>
              <span className="rounded-lg inline-flex p-3 bg-orange-50 text-orange-700 ring-4 ring-white">
                <Heart className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <Link to="/cloth-donation" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Cloth Donation
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Donate clothes or request assistance. Help us provide dignity through clothing.
              </p>
            </div>
          </div>

          <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg">
            <div>
              <span className="rounded-lg inline-flex p-3 bg-orange-50 text-orange-700 ring-4 ring-white">
                <Users className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <Link to="/donation" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Make a Donation
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Support our initiatives through monetary contributions. Every donation makes a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-orange-50 rounded-lg shadow-inner p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-5xl font-extrabold text-orange-600">1000+</p>
              <p className="mt-2 text-lg font-medium text-gray-500">Daily Meals Served</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-orange-600">500+</p>
              <p className="mt-2 text-lg font-medium text-gray-500">Active Volunteers</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-orange-600">2000+</p>
              <p className="mt-2 text-lg font-medium text-gray-500">Clothes Distributed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
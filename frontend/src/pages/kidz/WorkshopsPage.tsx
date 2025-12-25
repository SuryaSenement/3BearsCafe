import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KidsHeader from '../../components/kids/KidsHeader';
import KidsFooter from '../../components/kids/KidsFooter';
import { Calendar, Clock, Users, Star, ExternalLink } from 'lucide-react';
import { getEvents } from "../../services/events.service";
import type { EventItem } from "../../types";

const WorkshopsPage: React.FC = () => {
  const [workshops, setWorkshops] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All Workshops');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const navigate = useNavigate();
  const eventStatuses = ['All', 'Upcoming', 'Past', 'Ongoing'];

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getEvents();
        const workshopsOnly = (data || []).filter((e: EventItem) => e.type === 'workshop');
        setWorkshops(workshopsOnly);
        const cats = Array.from(new Set(workshopsOnly.map(w => w.category).filter(Boolean)));
        setCategories(['All Workshops', ...cats]);
      } catch (err) {
        console.error('Failed to load workshops:', err);
        setCategories([
          'All Workshops',
          'Creative & Art Classes',
          'Cooking Adventure Kids',
          'Dance & Exploration',
          'Fun & Game Day',
          'Science & Discovery',
          'Music & Rhythm',
          'Sports & Fitness'
        ]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filteredWorkshops = workshops.filter(workshop => {
    const categoryMatch = selectedCategory === 'All Workshops' || workshop.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || (workshop.status || '').toLowerCase() === selectedStatus.toLowerCase();
    return categoryMatch && statusMatch;
  });

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  const getStatusBadge = (status?: string) => {
    const colors: Record<string, string> = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      past: 'bg-gray-100 text-gray-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    const s = (status || 'upcoming').toLowerCase();
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[s] || colors.upcoming}`}>
        {s.charAt(0).toUpperCase() + s.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <KidsHeader />
        <div className="pt-20 pb-16 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-lg font-medium text-gray-700">Loading workshops...</span>
          </div>
        </div>
        <KidsFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <KidsHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-100 to-orange-100 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🎪 Up-Coming WORKSHOPS
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Kidz District World</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing workshops designed to inspire creativity, learning, and fun for children of all ages
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-purple-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Event Status</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {eventStatuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedStatus === status
                    ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-purple-600 hover:bg-purple-100 border border-purple-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredWorkshops.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No workshops found</h3>
              <p className="text-gray-600 mb-8">
                {workshops.length === 0
                  ? "No workshops are currently available. Check back soon!"
                  : "Try adjusting your filter criteria to find workshops."}
              </p>
              <button
                onClick={() => { setSelectedCategory('All Workshops'); setSelectedStatus('All'); }}
                className="bg-purple-500 text-white px-6 py-3 rounded-2xl hover:bg-purple-600 transition-colors"
              >
                Show All Workshops
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorkshops.map((workshop) => (
                <div
                  key={workshop.id || workshop._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border group cursor-pointer"
                  onClick={() => navigate(`/event/${workshop.id || workshop._id}`)}
                >
                  <div className="relative">
                    <img
                      src={workshop.image_url || (workshop as any).image || ''}
                      alt={workshop.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      {getStatusBadge(workshop.status)}
                    </div>
                    <div className="absolute top-3 right-3 bg-white rounded-lg px-2 py-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">4.8</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {workshop.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{workshop.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{workshop.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-green-500" />
                        {formatDate(workshop.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-green-500" />
                        {workshop.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-green-500" />
                        Age: {workshop.ageGroup || workshop.age} | Capacity: {workshop.capacity}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">{workshop.price || 'Free'}</span>
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
                          onClick={(e) => { e.stopPropagation(); navigate(`/event/${workshop.id || workshop._id}`); }}
                        >
                          View Details
                        </button>
                        {workshop.bookingLink && (
                          <a
                            href={workshop.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-purple-500 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="Book Now"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <KidsFooter />
    </div>
  );
};

export default WorkshopsPage;
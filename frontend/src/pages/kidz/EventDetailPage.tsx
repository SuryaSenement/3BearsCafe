import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Star,
  ExternalLink,
  ArrowLeft,
  Tag,
} from "lucide-react";
import KidsHeader from '../../components/kids/KidsHeader';
import KidsFooter from '../../components/kids/KidsFooter';

// Event detail shape used in this page
interface EventDetail {
  id: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  date?: string;
  time?: string;
  ageGroup?: string;
  capacity?: number;
  bookingLink?: string;
  price?: string;
  status?: 'upcoming' | 'ongoing' | 'past' | 'cancelled';
  registrations?: number;
}

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) {
        setError("Invalid event id");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`);
        const data = await response.json();

        if (response.ok) {
          setEvent(data);
        } else {
          setError(data.message || "Event not found");
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event details");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const getStatusBadge = (status?: string) => {
    const colors: Record<string, string> = {
      upcoming: 'bg-blue-100 text-blue-800 border-blue-200',
      ongoing: 'bg-green-100 text-green-800 border-green-200',
      past: 'bg-gray-100 text-gray-800 border-gray-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200'
    };

    const s = status || 'upcoming';
    return (
      <span className={`px-3 py-1 text-sm font-medium border ${colors[s] || colors.upcoming}`}>
        {s.charAt(0).toUpperCase() + s.slice(1)}
      </span>
    );
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "TBD";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <KidsHeader />
        <div className="pt-20 pb-16 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent animate-spin"></div>
            <span className="text-lg font-medium text-gray-700">Loading event details...</span>
          </div>
        </div>
        <KidsFooter />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <KidsHeader />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white border border-gray-200 shadow-sm p-12">
              <div className="text-6xl mb-4">😔</div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
              <p className="text-gray-600 mb-8">{error || 'Event not found'}</p>
              <Link
                to="/kids/workshops"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 hover:bg-purple-700 transition-colors border border-purple-600"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Workshops
              </Link>
            </div>
          </div>
        </div>
        <KidsFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <KidsHeader />

      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/kids/workshops"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Workshops
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative mb-8">
                {event.image ? (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover border border-gray-200 shadow-sm"
                  />
                ) : (
                  <div className="w-full h-80 bg-gray-100 flex items-center justify-center border border-gray-200">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  {getStatusBadge(event.status)}
                </div>
              </div>

              <div className="bg-white border border-gray-200 shadow-sm p-8">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">4.8</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-purple-500" />
                    <span className="text-purple-600 font-medium">{event.category}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About This Event</h2>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">What Your Kids Will Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-100">
                      <div className="w-10 h-10 bg-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold">🎨</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Creative Expression</h3>
                        <p className="text-sm text-gray-600">Develop artistic skills and creativity</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100">
                      <div className="w-10 h-10 bg-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">🤝</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Social Skills</h3>
                        <p className="text-sm text-gray-600">Learn teamwork and communication</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-100">
                      <div className="w-10 h-10 bg-green-500 flex items-center justify-center">
                        <span className="text-white font-bold">🧠</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                        <p className="text-sm text-gray-600">Enhance critical thinking abilities</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-100">
                      <div className="w-10 h-10 bg-orange-500 flex items-center justify-center">
                        <span className="text-white font-bold">💪</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Confidence Building</h3>
                        <p className="text-sm text-gray-600">Boost self-esteem and confidence</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Safety & Care</h2>
                  <div className="bg-green-50 border border-green-200 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500"></div>
                        <span className="text-green-800 text-sm">Certified instructors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500"></div>
                        <span className="text-green-800 text-sm">Safe, sanitized environment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500"></div>
                        <span className="text-green-800 text-sm">Small group sizes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500"></div>
                        <span className="text-green-800 text-sm">Parent communication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 shadow-sm p-6 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{event.price || "Free"}</div>
                    <p className="text-gray-600">per child</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-gray-900">{formatDate(event.date)}</div>
                        <div className="text-sm text-gray-600">Event Date</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-gray-900">{event.time || "TBD"}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-gray-900">{event.ageGroup || "All ages"}</div>
                        <div className="text-sm text-gray-600">Age Group</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-gray-900">{event.capacity ?? "N/A"} kids max</div>
                        <div className="text-sm text-gray-600">Capacity</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Availability</span>
                      <span className="text-sm text-green-600">
                        {event.capacity ? Math.max(0, event.capacity - (event.registrations || 0)) + " spots left" : "N/A"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2">
                      <div
                        className="bg-green-500 h-2 transition-all duration-300"
                        style={{
                          width: event.capacity ? `${Math.max(10, ((event.capacity - (event.registrations || 0)) / event.capacity) * 100)}%` : "10%"
                        }}
                      ></div>
                    </div>
                  </div>

                  <a
                    href={event.bookingLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 text-white py-3 px-6 font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 border border-purple-600"
                  >
                    <span>Book Now</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    Secure booking • Instant confirmation
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">📞 Call Us</div>
                      <div className="text-purple-600">+91 9876543214</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">📧 Email</div>
                      <div className="text-purple-600">info@kidsdistrict.com</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">⏰ Hours</div>
                      <div className="text-gray-600">Mon-Sat: 9 AM - 6 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <KidsFooter />
    </div>
  );
};

export default EventDetailPage;
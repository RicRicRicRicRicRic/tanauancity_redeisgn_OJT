function AnnouncementsEventsSection() {
  return (
    <section id="announcements-events" className="h-[768px] min-h-[768px] flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Announcements and Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3 text-red-700">Urgent Announcement</h3>
            <p className="text-gray-700 mb-2">City-wide vaccination drive scheduled for March 20-25, 2026</p>
            <span className="text-sm text-red-600">Posted: March 14, 2026</span>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Upcoming Event</h3>
            <p className="text-gray-700 mb-2">Tanauan City Fiesta Celebration - April 15, 2026</p>
            <span className="text-sm text-blue-600">Posted: March 13, 2026</span>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Community Event</h3>
            <p className="text-gray-700 mb-2">Barangay Assembly - March 18, 2026 at City Hall</p>
            <span className="text-sm text-green-600">Posted: March 11, 2026</span>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Public Hearing</h3>
            <p className="text-gray-700 mb-2">Zoning ordinance review - March 22, 2026</p>
            <span className="text-sm text-purple-600">Posted: March 10, 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnouncementsEventsSection
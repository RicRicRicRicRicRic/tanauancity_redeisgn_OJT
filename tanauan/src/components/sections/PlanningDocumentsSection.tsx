import { FileText, ArrowRight } from "lucide-react";

function PlanningDocumentsSection() {
  const documents = [
    {
      title: "Comprehensive Land Use Plan",
      year: "2016-2025",
      description:
        "The CLUP is a planning document that rationalizes the allocation and proper use of land resources. It projects public and private land uses in accordance with the future spatial organization of economic and social activities.",
    },
    {
      title: "Local Shelter Plan",
      year: "2017-2025",
      description:
        "The LSP is a comprehensive document that outlines the local government's strategies and action plans to address housing needs, especially for underprivileged constituents, over a specified time period.",
    },
  ];

  return (
    <section
      id="planning-documents"
      className="bg-gradient-to-b from-white via-red-50/30 to-white py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            City Planning Documents
          </h2>

          <p className="text-gray-600 text-lg">
            Access official planning documents that guide our city's
            development.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="group w-full max-w-[470px] overflow-hidden rounded-3xl border border-red-100 border-t-[6px] border-t-red-600 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
                    <FileText
                      size={26}
                      className="text-red-600"
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {doc.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-red-600">
                      {doc.year}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-[15px] leading-7 text-gray-600">
                  {doc.description}
                </p>

                {/* Button */}
                <button className="mt-8 inline-flex items-center gap-2 font-semibold text-red-600 transition-all duration-300 group-hover:gap-3 hover:text-red-700">
                  View Document
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-full bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700">
            View All Planning Documents
          </button>
        </div>
      </div>
    </section>
  );
}

export default PlanningDocumentsSection;
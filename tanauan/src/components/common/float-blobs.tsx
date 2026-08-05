export default function FloatBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top left area */}
      <div 
        className="absolute -top-10 -left-10 w-48 h-48 bg-pink-400/30 rounded-full blur-3xl animate-float-1"
      />
      
      {/* Blob 2 - Top right area */}
      <div 
        className="absolute -top-16 right-1/4 w-40 h-40 bg-rose-400/25 rounded-full blur-3xl animate-float-2"
      />
      
      {/* Blob 3 - Middle left */}
      <div 
        className="absolute top-1/3 -left-20 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl animate-float-3"
      />
      
      {/* Blob 4 - Middle right */}
      <div 
        className="absolute top-1/2 -right-16 w-44 h-44 bg-pink-500/25 rounded-full blur-3xl animate-float-4"
      />
      
      {/* Blob 5 - Bottom left */}
      <div 
        className="absolute -bottom-12 left-1/3 w-48 h-48 bg-rose-300/20 rounded-full blur-3xl animate-float-5"
      />
      
      {/* Blob 6 - Bottom right */}
      <div 
        className="absolute -bottom-20 right-1/3 w-40 h-40 bg-purple-300/25 rounded-full blur-3xl animate-float-6"
      />
      
      {/* Blob 7 - Center top */}
      <div 
        className="absolute top-20 left-1/2 w-36 h-36 bg-pink-400/20 rounded-full blur-3xl animate-float-2"
      />
      
      {/* Blob 8 - Center bottom */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-44 h-44 bg-rose-400/20 rounded-full blur-3xl animate-float-1"
      />
    </div>
  );
}

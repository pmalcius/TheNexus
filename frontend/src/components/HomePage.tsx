function HomePage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 border-b border-[#3e3e42] pb-4">
          <h1 className="text-4xl font-bold">
            <span className="text-[#4ec9b0]">The </span>
            <span className="text-[#569cd6]">Nexus</span>
          </h1>
        </header>
        
        <main className="space-y-6">
          <div className="bg-[#252526] border border-[#3e3e42] rounded-md p-6 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-[#4ec9b0]">Welcome Home</h2>
            <p className="text-[#d4d4d4] leading-relaxed">
              You've entered <span className="text-[#569cd6]">The Nexus</span>. This is your home page.
            </p>
          </div>
          
          <div className="bg-[#252526] border border-[#3e3e42] rounded-md p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-3 text-[#dcdcaa]">Getting Started</h3>
            <ul className="space-y-2 text-[#d4d4d4]">
              <li className="flex items-start">
                <span className="text-[#569cd6] mr-2">→</span>
                <span>Explore the features</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#569cd6] mr-2">→</span>
                <span>Customize your experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#569cd6] mr-2">→</span>
                <span>Connect with others</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

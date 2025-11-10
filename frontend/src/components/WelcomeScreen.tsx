interface WelcomeScreenProps {
  onEnter: () => void;
}

function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1e1e1e]">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
          <span className="text-[#d4d4d4]">Welcome to </span>
          <span className="text-[#4ec9b0]">The Nexus</span>
        </h1>
        <button
          onClick={onEnter}
          className="px-12 py-4 text-xl font-semibold text-[#ffffff] bg-[#0e639c] hover:bg-[#1177bb] rounded-md transition-colors duration-150 shadow-lg"
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;

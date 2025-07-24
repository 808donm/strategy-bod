// pages/index.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthenticated(true);
      router.push('/app');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#090c1d] text-white px-4 py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-[#12152b] rounded-2xl p-10 shadow-2xl border border-[#1e223c]">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-[#f9a825]">
          Titan Board – Growth Strategy Edition
        </h1>
        <p className="text-lg sm:text-xl text-center text-gray-300 mb-8">
          Your personal board of AI-powered business advisors. Built to help you scale sales, automate ops, secure your systems, and drive strategic growth.
        </p>
        <div className="bg-[#1e223c] p-6 rounded-xl shadow-inner mb-8">
          <h2 className="text-xl font-semibold text-[#f9a825] text-center">🚀 Real Results</h2>
          <p className="text-gray-400 text-center mt-3">
            "Before Titans, we were fumbling around with disconnected tools and no clear path to scale. In just 3 weeks, we closed more deals, rewrote our marketing strategy, and streamlined ops." – <span className="italic">Kai, SaaS Founder</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <button className="bg-gradient-to-br from-[#4b0082] to-[#6a1b9a] text-white px-6 py-3 rounded-xl shadow-lg hover:from-[#6a1b9a] hover:to-[#4b0082] transition-all">
              Get Access – $199/mo
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-transparent border border-[#f9a825] text-[#f9a825] px-6 py-3 rounded-xl hover:bg-[#f9a825] hover:text-[#090c1d] transition-all">
              Log In
            </button>
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6 text-center">
          Powered by OpenAI. Secured by CyberSecure Hawaii.
        </p>
      </div>
    </div>
  );
}


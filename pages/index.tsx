// pages/index.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f7fa] px-4">
      <div className="max-w-2xl bg-white shadow-xl rounded-2xl p-10 text-center border border-[#cfd8dc]">
        <h1 className="text-3xl font-bold mb-4 text-[#1a237e]">Titan Board – Growth Strategy Edition</h1>
        <p className="text-lg text-[#37474f] mb-6">
          The AI Advisory Board built for scaling businesses. Get expert guidance on sales, automation, ops, compliance, funding, and market strategy.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-[#0d47a1]">🚀 Real Results</h2>
          <p className="text-[#546e7a] mt-2">
            "Before Titans, we were fumbling around with disconnected tools and no clear path to scale. In 3 weeks, we closed more deals, rewrote our marketing strategy, and streamlined ops." – Kai, SaaS Founder
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link href="/register">
            <Button className="bg-[#0d47a1] hover:bg-[#1565c0] text-white px-6 py-3 rounded-xl">Get Access – $199/mo</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-white border border-[#0d47a1] text-[#0d47a1] hover:bg-[#e3f2fd] px-6 py-3 rounded-xl">Log In</Button>
          </Link>
        </div>
        <p className="text-sm text-[#90a4ae] mt-4">Backed by OpenAI. Secured by CyberSecure Hawaii.</p>
      </div>
    </div>
  );
}

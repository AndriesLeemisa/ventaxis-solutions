import React, { useState } from 'react';
import { X, Lock, ShieldCheck, ArrowRight, AlertCircle, Key } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('admin@ventaxis.co.za');
  const [password, setPassword] = useState('VentAxis@Engineering2026');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please provide administrator credentials.');
      return;
    }
    // Accept standard engineering credentials or any admin login
    if (password.length >= 6) {
      setError(null);
      onLoginSuccess();
    } else {
      setError('Invalid password. Minimum 6 characters required.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10243A]/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#10243A] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-2xl bg-[#1479D4]/30 border border-[#20B8CE]/40 mx-auto flex items-center justify-center mb-2">
            <Lock className="w-6 h-6 text-[#20B8CE]" />
          </div>
          <h3 className="font-['Manrope'] font-extrabold text-xl text-white">
            VentAxis Portal
          </h3>
          <p className="text-xs text-gray-300 mt-0.5">
            Operations & Quotation Workflow Management
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleLogin} className="p-6 space-y-4 text-sm">
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Administrator Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
              placeholder="admin@ventaxis.co.za"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Access Key / Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
              placeholder="••••••••••••"
            />
          </div>

          <div className="p-3 bg-[#EEF3F7] rounded-xl text-[11px] text-gray-600 space-y-1">
            <div className="font-bold text-[#10243A] flex items-center gap-1">
              <Key className="w-3 h-3 text-[#1479D4]" />
              <span>Pre-Configured Demo Credentials:</span>
            </div>
            <div>Email: <span className="font-mono text-gray-800 font-semibold">admin@ventaxis.co.za</span></div>
            <div>Password: <span className="font-mono text-gray-800 font-semibold">VentAxis@Engineering2026</span></div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>AUTHENTICATE & ENTER PORTAL</span>
            <ArrowRight className="w-4 h-4 text-[#20B8CE]" />
          </button>
        </form>
      </div>
    </div>
  );
};

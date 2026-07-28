import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Briefcase,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Users,
//   UserPlus,
//   LogIn,
} from "lucide-react";
import logo from "../assets/kalo-logo.png";
// Small 4-point sparkle/star used for the decorative scatter
function Sparkle({ className = "", size = 16, color = "#8B5CF6" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z"
        fill={color}
      />
    </svg>
  );
}

function DotGrid({ className = "" }) {
  const dots = Array.from({ length: 6 * 5 });
  return (
    <div className={`grid grid-cols-6 gap-2 ${className}`}>
      {dots.map((_, i) => (
        <span key={i} className="w-1 h-1 rounded-full bg-indigo-200" />
      ))}
    </div>
  );
}

function FeatureRow({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-500 leading-snug mt-0.5 max-w-[220px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function InputField({
  icon,
  placeholder,
  type = "text",
  trailing,
  value,
  onChange,
}) {
  return (
    <div className="relative flex items-center border border-slate-200 rounded-xl px-3.5 h-11 bg-white focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100 transition">
      <span className="text-slate-400 mr-2.5 shrink-0">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
      />
      {trailing}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

const FEATURES = [
  {
    icon: <ShieldCheck size={20} className="text-indigo-600" />,
    title: "Secure & Trusted",
    description: "Your data is protected with enterprise-grade security.",
  },
  {
    icon: <BarChart3 size={20} className="text-indigo-600" />,
    title: "AI-Powered Insights",
    description: "Make smarter decisions with advanced analytics.",
  },
  {
    icon: <Users size={20} className="text-indigo-600" />,
    title: "Built for Growth",
    description: "Scale your influencer marketing with powerful tools.",
  },
];

export default function KaloAuth() {
  const [mode, setMode] = useState("signup"); // "signup" | "login"

  // signup state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // login state
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col">
      {/* Ambient purple glow bottom-left */}
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-24 w-72 h-72 rounded-full bg-indigo-200/40 blur-3xl" />

      {/* Decorative dot grids */}
      <DotGrid className="absolute top-16 right-16 opacity-70" />
      <DotGrid className="absolute bottom-24 right-28 opacity-70" />

      {/* Decorative sparkles */}
      <Sparkle
        className="absolute top-10 left-[16%]"
        size={14}
        color="#A78BFA"
      />
      <Sparkle
        className="absolute top-36 left-[20%]"
        size={22}
        color="#7C3AED"
      />
      <Sparkle
        className="absolute top-24 left-[38%]"
        size={12}
        color="#C4B5FD"
      />
      <Sparkle
        className="absolute top-16 right-[52%]"
        size={22}
        color="#C4B5FD"
      />
      <Sparkle
        className="absolute bottom-45 right-[9%]"
        size={18}
        color="#7C3AED"
      />
      <Sparkle
        className="absolute bottom-32 right-[12%]"
        size={10}
        color="#C4B5FD"
      />

      {/* Main content */}
      <div className="flex-1  flex items-center justify-center px-10 mb-4">
        {/* Top bar */}
        <div className="absolute top-10 left-10 w-full flex items-center justify-between px-10 pt-8">
          <div className="flex items-center gap-2.5">
            <div className=" rounded-xlflex items-center justify-center">
              <img src={logo} className="h-15 " alt="" srcset="" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 leading-none">
                kalo
              </p>
              <p className="text-[11px] text-slate-400 leading-none mt-1">
                AI Influencer Intelligence
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl mt-0  flex items-center justify-between gap-16">
          {/* Left feature column */}
          <div className="hidden lg:flex flex-col gap-9 w-72">
            {FEATURES.map((f) => (
              <FeatureRow key={f.title} {...f} />
            ))}
          </div>

          {/* Auth card */}
          <div className=" relative z-10 w-full max-w-[460px]  mr-15 rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100 px-9 py-4 ">
            {/* <div className="flex justify-center mb-1">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                {isSignup ? (
                  <UserPlus
                    size={22}
                    className="text-indigo-600"
                    strokeWidth={2.25}
                  />
                ) : (
                  <LogIn
                    size={22}
                    className="text-indigo-600"
                    strokeWidth={2.25}
                  />
                )}
              </div>
            </div> */}

            <h1 className="text-center text-2xl font-bold text-slate-900">
              {isSignup ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-center text-sm text-slate-500 mt-2 leading-relaxed">
              {isSignup ? (
                <>
                  Join kalo and unlock powerful AI insights
                  <br />
                  to grow your brand and campaigns.
                </>
              ) : (
                <>
                  Log in to keep growing your brand
                  <br />
                  with powerful AI insights.
                </>
              )}
            </p>

            {/* Mode switch pill */}
            <div className="mt-5 flex bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 h-9 rounded-lg text-sm font-semibold transition ${
                  isSignup
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Sign up
              </button>
              <button
                onClick={() => setMode("login")}
                className={`flex-1 h-9 rounded-lg text-sm font-semibold transition ${
                  !isSignup
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Log in
              </button>
            </div>

            {isSignup ? (
              <form
                className="mt-5 flex flex-col gap-3.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex gap-3">
                  <InputField
                    icon={<User size={16} />}
                    placeholder="Full name"
                  />
                  <InputField
                    icon={<Mail size={16} />}
                    placeholder="Email address"
                  />
                </div>

                <InputField
                  icon={<Lock size={16} />}
                  placeholder="Create password"
                  type={showPassword ? "text" : "password"}
                  trailing={
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />

                <InputField
                  icon={<Lock size={16} />}
                  placeholder="Confirm password"
                  type={showConfirm ? "text" : "password"}
                  trailing={
                    <button
                      type="button"
                      onClick={() => setShowConfirm((s) => !s)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />

                <InputField
                  icon={<Briefcase size={16} />}
                  placeholder="Company name (optional)"
                  trailing={
                    <ChevronDown size={16} className="text-slate-400" />
                  }
                />

                <label className="flex items-center gap-2.5 mt-1 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed((a) => !a)}
                    className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400 accent-indigo-600"
                  />
                  <span className="text-[13px] text-slate-500">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-indigo-600 font-medium hover:text-indigo-700"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-indigo-600 font-medium hover:text-indigo-700"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-1 h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-violet-700 transition shadow-md shadow-indigo-200"
                >
                  Create Account
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <form
                className="mt-5 flex flex-col gap-3.5"
                onSubmit={(e) => e.preventDefault()}
              >
                <InputField
                  icon={<Mail size={16} />}
                  placeholder="Email address"
                />

                <InputField
                  icon={<Lock size={16} />}
                  placeholder="Password"
                  type={showLoginPassword ? "text" : "password"}
                  trailing={
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword((s) => !s)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      {showLoginPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  }
                />

                <div className="flex items-center justify-between mt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember((r) => !r)}
                      className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400 accent-indigo-600"
                    />
                    <span className="text-[13px] text-slate-500">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-[13px] text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="mt-1 h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-violet-700 transition shadow-md shadow-indigo-200"
                >
                  Log In
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div className="flex items-center gap-3 my-5">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400 font-medium">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button className="w-full h-11 rounded-xl border border-slate-200 flex items-center justify-center gap-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
              <GoogleIcon />
              {isSignup ? "Sign up with Google" : "Log in with Google"}
            </button>

            <p className="text-center text-sm text-slate-500 mt-5">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Log in
                  </button>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Sign up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

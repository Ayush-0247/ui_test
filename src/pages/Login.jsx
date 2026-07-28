import { useState } from "react";
import kaloLogo from "../assets/kalo-logo.png";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
} from "lucide-react";



const GOOGLE_G = (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fill="#4285F4"
      d="M23.52 12.27c0-.82-.07-1.42-.22-2.04H12v3.7h6.6c-.13 1.1-.85 2.75-2.45 3.86l-.02.15 3.56 2.76.25.02c2.26-2.09 3.58-5.17 3.58-8.45z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.78-2.93c-1.01.7-2.37 1.19-4.15 1.19-3.18 0-5.87-2.09-6.83-4.99l-.14.01-3.7 2.87-.05.14C3.26 21.3 7.3 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.17 14.37A7.4 7.4 0 0 1 4.75 12c0-.82.15-1.62.4-2.37l-.01-.16-3.75-2.9-.12.06A11.98 11.98 0 0 0 0 12c0 1.93.47 3.76 1.27 5.37l3.9-3z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c2.25 0 3.77.97 4.64 1.79l3.38-3.3C17.94 1.19 15.24 0 12 0 7.3 0 3.26 2.7 1.27 6.63l3.9 3C6.13 6.84 8.82 4.75 12 4.75z"
    />
  </svg>
);



function LabeledInput({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  showToggle,
  visible,
  onToggleVisible,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="mt-1.5 relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
          <Icon className="w-[18px] h-[18px]" />
        </span>
        <input
          type={showToggle ? (visible ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggleVisible}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600"
            tabIndex={-1}
          >
            {visible ? (
              <EyeOff className="w-[18px] h-[18px]" />
            ) : (
              <Eye className="w-[18px] h-[18px]" />
            )}
          </button>
        )}
      </div>
    </label>
  );
}

function GoogleButton({ children }) {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
    >
      {GOOGLE_G}
      {children}
    </button>
  );
}

function OrDivider() {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="h-px flex-1 bg-slate-200" />
      <span className="text-xs font-medium text-slate-400">OR</span>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}


function LoginCard({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="w-full max-w-[440px]">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <img src={kaloLogo} alt="Kalo" className="h-10 w-auto" />

          <div>
            <h1 className="text-[28px] font-bold tracking-tight leading-none text-slate-900">
              Kalo
            </h1>
            <p className="mt-0.5 text-[13px] font-medium text-slate-500">
              Influencer Marketing Platform
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
            Login to Kalo
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Welcome back! Please enter your details.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <LabeledInput
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LabeledInput
          label="Password"
          icon={Lock}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showToggle
          visible={showPw}
          onToggleVisible={() => setShowPw((v) => !v)}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>

          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Sign In
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="my-4">
        <OrDivider />
      </div>

      <GoogleButton>Continue with Google</GoogleButton>

      <p className="mt-4 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="font-semibold text-indigo-600 hover:underline"
        >
          Create Account
        </button>
      </p>
    </div>
  );
}

function SignupCard({ onSwitch }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="w-full max-w-[440px]">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <img src={kaloLogo} alt="Kalo" className="h-10 w-auto" />

          <div>
            <h1 className="text-[28px] font-bold tracking-tight leading-none text-slate-900">
              Kalo
            </h1>

            <p className="mt-0.5 text-[13px] font-medium text-slate-500">
              Influencer Marketing Platform
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-[30px] font-bold tracking-tight text-slate-900">
            Create your account
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Get started with Kalo in a few seconds.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <LabeledInput
          label="Full Name"
          icon={User}
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <LabeledInput
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LabeledInput
          label="Password"
          icon={Lock}
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showToggle
          visible={showPw}
          onToggleVisible={() => setShowPw((v) => !v)}
        />

        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Create Account
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="my-4">
        <OrDivider />
      </div>

      <GoogleButton>Continue with Google</GoogleButton>

      <p className="mt-4 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="font-semibold text-indigo-600 hover:underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
}

export default function AuthPages({ defaultMode = "login" }) {
  const [mode, setMode] = useState(defaultMode); // "login" | "signup"

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-white to-violet-50 flex">
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
          {mode === "login" ? (
            <LoginCard onSwitch={() => setMode("signup")} />
          ) : (
            <SignupCard onSwitch={() => setMode("login")} />
          )}
        </div>
      </div>
    </div>
  );
}

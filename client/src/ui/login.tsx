// src/components/AuthModal.tsx
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";


interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // Reset fields when switching tabs
  const handleTabSwitch = (newTab: "signin" | "signup") => {
    setTab(newTab);
    setError("");
    setEmail("");
    setPassword("");
    setDisplayName("");
    setConfirmPassword("");
  };

  // Email/Password Sign In
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Email/Password Sign Up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Google Auth
  const handleGoogleAuth = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-md mx-2 p-8 relative shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-200">
          <button
            className={`flex-1 py-2 text-lg font-medium ${
              tab === "signin"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
            onClick={() => handleTabSwitch("signin")}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 text-lg font-medium ${
              tab === "signup"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
            onClick={() => handleTabSwitch("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Error */}
        {/* {error && <div className="mb-4 text-red-600 text-sm">{error}</div>} */}

        {/* Forms */}
        {tab === "signin" ? (
          <form onSubmit={handleSignIn} className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-500 mb-4">
              Sign in to your account to continue
            </p>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="pl-10 pr-3 py-2 border rounded-md w-full bg-blue-50 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="block font-medium mb-1">Password</label>
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:underline"
                  onClick={() => alert("Implement forgot password!")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="pl-10 pr-3 py-2 border rounded-md w-full bg-blue-50 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="mx-2 text-gray-400 text-sm">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-2 border rounded-md py-2 bg-white hover:bg-gray-50 font-medium"
              disabled={loading}
            >
              <FcGoogle className="text-xl" /> Google
            </button>
            <div className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => handleTabSwitch("signup")}
              >
                Sign up
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
            <p className="text-gray-500 mb-4">
              Sign up to get started with PencilArt
            </p>
            <div>
              <label className="block font-medium mb-1">Display Name</label>
              <input
                type="text"
                className="pl-3 pr-3 py-2 border rounded-md w-full bg-white outline-none"
                placeholder="Your name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="pl-10 pr-3 py-2 border rounded-md w-full bg-blue-50 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="pl-10 pr-3 py-2 border rounded-md w-full bg-blue-50 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="pl-10 pr-3 py-2 border rounded-md w-full bg-blue-50 outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="mx-2 text-gray-400 text-sm">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-2 border rounded-md py-2 bg-white hover:bg-gray-50 font-medium"
              disabled={loading}
            >
              <FcGoogle className="text-xl" /> Google
            </button>
            <div className="text-center text-sm mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => handleTabSwitch("signin")}
              >
                Sign in
              </button>
            </div>
          </form>
        )}
      </div>
      {/* Overlay click to close */}
      {/* <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-label="Close modal"
      /> */}
    </div>
  );
};

export default AuthModal;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, RedirectToSignIn } from '@clerk/clerk-react';

// Import Components
import LandingPage from './Components/LandingPage';
import Mainpage from './Components/Mainpage';
import Meditation from './Components/Meditation';
import VideoCall from './Components/VideoCall';
import RoomPage from './Components/RoomPage';
import Test from './Components/Test';

const PUBLISHABLE_KEY = "pk_test_c3RpbGwtcmF0dGxlci00NC5jbGVyay5hY2NvdW50cy5kZXYk"// Use Vercel env variable

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Set it in your environment variables.");
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Clerk Authentication */}
          <Route path="/login" element={<SignIn redirectUrl="/mainpage" />} />
          <Route path="/register" element={<SignUp redirectUrl="/mainpage" />} />

          {/* Protected Routes - Accessible Only When Signed In */}
          <Route
            path="/mainpage"
            element={
              <SignedIn>
                <Mainpage />
              </SignedIn>
            }
          />

          <Route
            path="/meditation"
            element={
              <SignedIn>
                <Meditation />
              </SignedIn>
            }
          />

          <Route
            path="/videocall"
            element={
              <SignedIn>
                <VideoCall />
              </SignedIn>
            }
          />

          <Route
            path="/videocall/:id"
            element={
              <SignedIn>
                <RoomPage />
              </SignedIn>
            }
          />

          <Route
            path="/test"
            element={
              <SignedIn>
                <Test />
              </SignedIn>
            }
          />

          {/* Redirect Unauthorized Users to Login */}
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;

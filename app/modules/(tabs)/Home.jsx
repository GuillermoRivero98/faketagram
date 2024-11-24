// modules/home/Home.tsx
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/feed/FeedScreen');
    } else {
      router.replace('/auth/LoginScreen');
    }
  }, [isAuthenticated]);

  return null;
};

export default Home;

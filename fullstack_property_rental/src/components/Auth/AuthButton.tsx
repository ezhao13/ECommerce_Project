import { GoogleLogin, googleLogout, CredentialResponse } from '@react-oauth/google';
import { GoogleUser } from '../../types';
import { verifyGoogleToken } from '../../api';

interface Props {
  user: GoogleUser | null;
  onUser: (user: GoogleUser | null) => void;
}

const AuthButton = ({ user, onUser }: Props) => {
  const handleSuccess = async (response: CredentialResponse) => {
    if (!response.credential) return;
    try {
      const userData = await verifyGoogleToken(response.credential);
      onUser(userData);
    } catch {
      console.error('Auth failed');
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border-2 border-accent" />
        <span className="text-sm text-white hidden sm:block">{user.name}</span>
        <button
          onClick={() => { googleLogout(); onUser(null); }}
          className="text-xs text-gray-400 hover:text-white underline"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.error('Login failed')}
      size="small"
      theme="filled_black"
    />
  );
};

export default AuthButton;

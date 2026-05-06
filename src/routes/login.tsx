import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to admin login page
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-sm text-muted-foreground">Redirection vers la page de connexion...</p>
      </div>
    </div>
  );
}
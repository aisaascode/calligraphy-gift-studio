
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
        <div className="font-calligraphy text-8xl text-primary">404</div>
        <h1 className="text-3xl font-heading font-bold">Page Not Found</h1>
        <p className="text-muted-foreground">
          We're sorry, the page you requested could not be found.
          Please check the URL or navigate back to the homepage.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

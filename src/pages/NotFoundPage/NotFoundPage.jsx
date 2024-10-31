import { AlertCircle, Home } from "lucide-react";
import Card from "../../components/core/Card";
import useTheme from "../../hooks/useTheme";
import { cn } from "../../utils";
import { THEME_OPTIONS } from "../../stores/themeContext";
import Typography from "../../components/core/Typography";
import Link from "../../components/core/Link";

const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <Card className="text-center p-8">
      <AlertCircle
        className={cn(
          "w-16 h-16 mx-auto mb-6",
          theme === THEME_OPTIONS.DARK_MODE
            ? "text-slate-400"
            : "text-slate-600"
        )}
      />

      <Typography component="h1" className="mb-2">
        Page Not Found
      </Typography>

      <Typography component="body" className="mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </Typography>

      <Link to="/" className="inline-flex items-center gap-2">
        <Home className="w-4 h-4" />
        Back to Home
      </Link>
    </Card>
  );
};

export default NotFoundPage;

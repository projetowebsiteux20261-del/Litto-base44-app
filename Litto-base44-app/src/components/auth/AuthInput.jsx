import { useState } from "react";

export default function AuthInput({
  label,
  icon,
  type = "text",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div>
      <label className="block text-sm font-bold mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          className="w-full px-4 py-3 border-2 border-foreground rounded-sm bg-card"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        )}
      </div>
    </div>
  );
}
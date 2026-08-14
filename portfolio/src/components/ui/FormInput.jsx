/**
 * Reusable form input component with built-in validation error display
 * Eliminates duplicated input/textarea field structures in Contact form
 * 
 * Props:
 *   type - "text", "email", or "textarea"
 *   name - Input name attribute
 *   placeholder - Placeholder text
 *   icon - React icon component to display in input
 *   value - Current input value (controlled component)
 *   error - Error message string (if field is invalid)
 *   onChange - Change handler function
 *   rows - Number of rows for textarea (optional, default: 5)
 * 
 * Usage:
 *   <FormInput
 *     type="email"
 *     name="email"
 *     placeholder="Your Email"
 *     icon={FaEnvelope}
 *     value={formData.email}
 *     error={errors.email}
 *     onChange={handleChange}
 *   />
 */
export default function FormInput({
  type = "text",
  name,
  placeholder,
  icon: Icon,
  value,
  error,
  onChange,
  rows,
}) {
  const hasError = !!error;

  const inputClasses = `w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border rounded-lg focus:ring-2 outline-none transition-all ${
    hasError
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-200/80 dark:border-gray-700/50 focus:ring-blue-500 focus:border-blue-500"
  }`;

  return (
    <div className="relative">
      {Icon && (
        <Icon
          className={`absolute ${type === "textarea" ? "top-5" : "top-1/2"} left-4 ${type === "textarea" ? "" : "-translate-y-1/2"} text-gray-400`}
        />
      )}
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows || 5}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1 ml-2">{error}</p>}
    </div>
  );
}

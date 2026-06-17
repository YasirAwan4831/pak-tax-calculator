import { ExternalLink, Globe, Mail } from "lucide-react";

const socialLinks = [
  { icon: Globe, href: "https://github.com/YasirAwan4831", label: "GitHub" },
  { icon: ExternalLink, href: "https://linkedin.com/in/yasirawan4831", label: "LinkedIn" },
  { icon: Mail, href: "mailto:my3154831409@gmail.com", label: "Email" },
];

export default function SocialBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-primary-900 py-1.5 dark:border-gray-800 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 px-4 sm:px-6 lg:px-8">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-primary-100 transition hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
